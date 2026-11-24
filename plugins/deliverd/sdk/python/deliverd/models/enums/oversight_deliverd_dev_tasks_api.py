from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OversightDeliverdDevTasksApi(str, Enum):
    """How people oversee the AI's work"""

    NONE = "none"
    POST_ACTION_REVIEW = "post_action_review"
    SAMPLED_REVIEW = "sampled_review"
    HUMAN_ON_THE_LOOP = "human_on_the_loop"
    HUMAN_IN_THE_LOOP = "human_in_the_loop"
    PRE_ACTION_APPROVAL = "pre_action_approval"
    DUAL_APPROVAL = "dual_approval"

    __str__ = str.__str__


OversightDeliverdDevTasksApiOrStr: TypeAlias = Annotated[
    OversightDeliverdDevTasksApi | str, open_enum_validator(OversightDeliverdDevTasksApi)
]
