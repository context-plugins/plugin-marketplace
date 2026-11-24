from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResultTypeFilter(str, Enum):
    """Specifies which results to filter. See Test result details">Test results details for details about different
    types of results."""

    OVERALL_TEST_RESULTS = "OverallTestResults"
    CONVERSATION_LEVEL_TEST_RESULTS = "ConversationLevelTestResults"
    INTENT_CLASSIFICATION_TEST_RESULTS = "IntentClassificationTestResults"
    SLOT_RESOLUTION_TEST_RESULTS = "SlotResolutionTestResults"
    UTTERANCE_LEVEL_RESULTS = "UtteranceLevelResults"

    __str__ = str.__str__


ResultTypeFilterOrStr: TypeAlias = Annotated[ResultTypeFilter | str, open_enum_validator(ResultTypeFilter)]
