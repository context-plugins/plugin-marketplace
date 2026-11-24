from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_automation_executions400_error1 import ApiV1AutomationExecutions400Error1
from ..models.api_v1_automation_executions401_error1 import ApiV1AutomationExecutions401Error1
from ..models.api_v1_automation_executions403_error1 import ApiV1AutomationExecutions403Error1
from ..models.api_v1_automation_executions404_error1 import ApiV1AutomationExecutions404Error1
from ..models.api_v1_automation_executions429_error1 import ApiV1AutomationExecutions429Error1
from ..models.api_v1_automation_executions500_error1 import ApiV1AutomationExecutions500Error1
from ..models.api_v1_automation_executions502_error1 import ApiV1AutomationExecutions502Error1
from ..models.api_v1_automation_executions503_error1 import ApiV1AutomationExecutions503Error1
from ..models.api_v1_automation_executions504_error1 import ApiV1AutomationExecutions504Error1

AutomationGetExecutionErrorBody: TypeAlias = (
    ApiV1AutomationExecutions400Error1
    | ApiV1AutomationExecutions401Error1
    | ApiV1AutomationExecutions403Error1
    | ApiV1AutomationExecutions404Error1
    | ApiV1AutomationExecutions429Error1
    | ApiV1AutomationExecutions500Error1
    | ApiV1AutomationExecutions502Error1
    | ApiV1AutomationExecutions503Error1
    | ApiV1AutomationExecutions504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AutomationGetExecutionError:
    def map(self, status_code: int, content: bytes) -> AutomationGetExecutionErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AutomationExecutions400Error1](content)
            case 401:
                return decode_json[ApiV1AutomationExecutions401Error1](content)
            case 403:
                return decode_json[ApiV1AutomationExecutions403Error1](content)
            case 404:
                return decode_json[ApiV1AutomationExecutions404Error1](content)
            case 429:
                return decode_json[ApiV1AutomationExecutions429Error1](content)
            case 500:
                return decode_json[ApiV1AutomationExecutions500Error1](content)
            case 502:
                return decode_json[ApiV1AutomationExecutions502Error1](content)
            case 503:
                return decode_json[ApiV1AutomationExecutions503Error1](content)
            case 504:
                return decode_json[ApiV1AutomationExecutions504Error1](content)
            case _:
                return RawError(status_code, content)


automation_get_execution_error_mapper: Final[
    ErrorMapper[AutomationGetExecutionErrorBody]
] = _AutomationGetExecutionError()
