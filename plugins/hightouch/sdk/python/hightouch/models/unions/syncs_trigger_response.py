from __future__ import annotations

from typing import TypeAlias

from ..trigger_run_output import TriggerRunOutput, TriggerRunOutputDict
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

SyncsTriggerResponse: TypeAlias = TriggerRunOutput | ValidateErrorJson

SyncsTriggerResponseDict: TypeAlias = TriggerRunOutputDict | ValidateErrorJsonDict
