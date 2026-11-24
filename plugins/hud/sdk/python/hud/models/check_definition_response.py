from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.check_executor_type import CheckExecutorTypeOrStr
from .enums.check_subject_type import CheckSubjectTypeOrStr


class CheckDefinitionResponse(SdkBaseModel):
    """A discoverable platform check definition."""

    key: str
    label: str
    description: str
    definition_version: int
    subject_types: list[CheckSubjectTypeOrStr]
    executor_type: CheckExecutorTypeOrStr
    """Execution mechanisms supported by a check definition."""


class CheckDefinitionResponseDict(TypedDict):
    key: str
    label: str
    description: str
    definition_version: int
    subject_types: list[CheckSubjectTypeOrStr]
    executor_type: CheckExecutorTypeOrStr
