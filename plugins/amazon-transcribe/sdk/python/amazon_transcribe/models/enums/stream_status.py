from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StreamStatus(str, Enum):
    """The streaming status of the HealthScribe streaming session. Possible Values: IN_PROGRESS PAUSED FAILED COMPLETED
    This status is specific to real-time streaming. A COMPLETED status doesn't mean that the post-stream analytics is
    complete. To get status of an analytics result, check the Status field for the analytics result within the
    MedicalScribePostStreamAnalyticsResult. For example, you can view the status of the ClinicalNoteGenerationResult."""

    IN_PROGRESS = "IN_PROGRESS"
    PAUSED = "PAUSED"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

    __str__ = str.__str__


StreamStatusOrStr: TypeAlias = Annotated[StreamStatus | str, open_enum_validator(StreamStatus)]
