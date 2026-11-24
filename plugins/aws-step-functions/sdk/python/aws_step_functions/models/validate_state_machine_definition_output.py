from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.result import ResultOrStr
from .validate_state_machine_definition_diagnostic import (
    ValidateStateMachineDefinitionDiagnostic,
    ValidateStateMachineDefinitionDiagnosticDict,
)


class ValidateStateMachineDefinitionOutput(SdkBaseModel):
    result: ResultOrStr
    """The result value will be OK when no syntax errors are found, or FAIL if the workflow definition does not pass
    verification."""

    diagnostics: list[ValidateStateMachineDefinitionDiagnostic]
    """An array of diagnostic errors and warnings found during validation of the state machine definition. Since
    warnings do not prevent deploying your workflow definition, the result value could be OK even when warning
    diagnostics are present in the response."""

    truncated: Optional[bool] = UNSET
    """The result value will be true if the number of diagnostics found in the workflow definition exceeds maxResults.
    When all diagnostics results are returned, the value will be false."""


class ValidateStateMachineDefinitionOutputDict(TypedDict):
    result: ResultOrStr
    diagnostics: list[ValidateStateMachineDefinitionDiagnosticDict]
    truncated: NotRequired[bool]
