from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity import SeverityOrStr


class ValidateStateMachineDefinitionDiagnostic(SdkBaseModel):
    severity: SeverityOrStr
    """A value of ERROR means that you cannot create or update a state machine with this definition. WARNING level
    diagnostics alert you to potential issues, but they will not prevent you from creating or updating your state
    machine."""

    code: str
    """Identifying code for the diagnostic."""

    message: str
    """Message describing the diagnostic condition."""

    location: Optional[str] = UNSET
    """Location of the issue in the state machine, if available. For errors specific to a field, the location could be
    in the format: /States//, for example: /States/FailState/ErrorPath."""


class ValidateStateMachineDefinitionDiagnosticDict(TypedDict):
    severity: SeverityOrStr
    code: str
    message: str
    location: NotRequired[str]
