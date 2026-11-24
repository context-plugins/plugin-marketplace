from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FailedRowsConfigurationStateDto(str, Enum):
    READY = "ready"
    DO_NOT_DETECT_AUTOMATICALLY = "doNotDetectAutomatically"
    AWAITING_PRIMARY_KEYS_INFORMATION_FROM_AGENT = "awaitingPrimaryKeysInformationFromAgent"
    AWAITING_PRIMARY_KEYS_INFORMATION_FROM_RUNNER = "awaitingPrimaryKeysInformationFromRunner"
    ERROR_MISSING_UNIQUE_KEYS = "errorMissingUniqueKeys"

    __str__ = str.__str__


FailedRowsConfigurationStateDtoOrStr: TypeAlias = Annotated[
    FailedRowsConfigurationStateDto | str, open_enum_validator(FailedRowsConfigurationStateDto)
]
