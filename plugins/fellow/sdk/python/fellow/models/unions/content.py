from __future__ import annotations

from typing import TypeAlias

from ..recap_action_item import RecapActionItem, RecapActionItemDict
from ..recap_decision import RecapDecision, RecapDecisionDict
from ..recap_key_moment import RecapKeyMoment, RecapKeyMomentDict
from ..recap_topic import RecapTopic, RecapTopicDict

Content: TypeAlias = list[RecapKeyMoment] | list[RecapTopic] | list[RecapActionItem] | list[RecapDecision] | str

ContentDict: TypeAlias = (
    list[RecapKeyMomentDict] | list[RecapTopicDict] | list[RecapActionItemDict] | list[RecapDecisionDict] | str
)
