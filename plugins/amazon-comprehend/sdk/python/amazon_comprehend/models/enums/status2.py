from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2(str, Enum):
    """The status of the document classifier. If the status is TRAINED the classifier is ready to use. If the status is
    TRAINED_WITH_WARNINGS the classifier training succeeded, but you should review the warnings returned in the
    CreateDocumentClassifier response. If the status is FAILED you can see additional information about why the
    classifier wasn't trained in the Message field."""

    SUBMITTED = "SUBMITTED"
    TRAINING = "TRAINING"
    DELETING = "DELETING"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"
    IN_ERROR = "IN_ERROR"
    TRAINED = "TRAINED"
    TRAINED_WITH_WARNING = "TRAINED_WITH_WARNING"

    __str__ = str.__str__


Status2OrStr: TypeAlias = Annotated[Status2 | str, open_enum_validator(Status2)]
