<template>
  <div class="list-participans mb-3">
        <span v-for="(participant, index) in getParticipants" :id="`getParticipants${participant._id}`" v-bind:key="participant._id">
            <img :src="participant.image" alt="Profile pic" class="rounded p-0 shadow m-2" style="width: 40px;" v-bind:class="{'active': getParticipants[index].active, 'away': !getParticipants[index].active}">
            <img :src="participant.image" alt="Profile pic" class="rounded p-0 shadow m-2" style="width: 40px;" v-bind:class="{'active': getParticipants[index].active, 'away': !getParticipants[index].active}">
            <img :src="participant.image" alt="Profile pic" class="rounded p-0 shadow m-2" style="width: 40px;" v-bind:class="{'active': getParticipants[index].active, 'away': !getParticipants[index].active}">
            <img :src="participant.image" alt="Profile pic" class="rounded p-0 shadow m-2" style="width: 40px;" v-bind:class="{'active': getParticipants[index].active, 'away': !getParticipants[index].active}">
        </span>
  </div>
</template>

<script>
import { useState, useActions, useRouter, useGetters, useMutations } from '@u3u/vue-hooks';
import { mapGetters } from 'vuex';
import { ref } from '@vue/composition-api';
export default {
    setup() {
        let a = ref('');

        const { retro } = useState('comments', [
            'retro'
        ]);

        const { getParticipants, isParticipantActive } = useGetters('comments', [
            'getParticipants',
            'isParticipantActive'
        ]);

        const { user } = useState('auth', [
            'user'
        ]);

        const { updateUser } = useActions('auth', [
            'updateUser'
        ]);

        const { isActive } = useGetters('auth', [
            'isActive'
        ]);

        const { listenUserUpdate } = useActions('comments', [
            'listenUserUpdate'
        ]);

        const {change } = useMutations('comments', [
            'change'
        ]);

        listenUserUpdate();

        const ifvisible = require('ifvisible.js');
        ifvisible.setIdleDuration(15);

        if(ifvisible.now()) {
            if(!user.value.active) {
                let aux = user.value;
                aux.active = true;
                updateUser(aux);
            }
        } else {
            if(user.value.active) {
                let aux = user.value;
                aux.active = false;
                updateUser(aux);
            }
        }

        setInterval(() => {
            if(ifvisible.now()) {
                if(!user.value.active) {
                    let aux = user.value;
                    aux.active = true;
                    updateUser(aux);
                }
            } else {
                if(user.value.active) {
                    let aux = user.value;
                    aux.active = false;
                    updateUser(aux);
                }
            }
        }, 0.25 * 60 * 1000);

        return { 
            retro,
            isActive,
            getParticipants,
            isParticipantActive,

        };

    }

}
</script>

<style lang="scss" scoped>
@import '../styles/abstracts/_variables.scss';
.active {
    border: 2px solid $success;
}

.away {
    border: 2px solid $warning;
}

</style>