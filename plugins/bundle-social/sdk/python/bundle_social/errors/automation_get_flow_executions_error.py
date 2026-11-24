from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_automations_executions400_error1 import ApiV1AutomationsExecutions400Error1
from ..models.api_v1_automations_executions401_error1 import ApiV1AutomationsExecutions401Error1
from ..models.api_v1_automations_executions403_error1 import ApiV1AutomationsExecutions403Error1
from ..models.api_v1_automations_executions404_error1 import ApiV1AutomationsExecutions404Error1
from ..models.api_v1_automations_executions429_error1 import ApiV1AutomationsExecutions429Error1
from ..models.api_v1_automations_executions500_error1 import ApiV1AutomationsExecutions500Error1
from ..models.api_v1_automations_executions502_error1 import ApiV1AutomationsExecutions502Error1
from ..models.api_v1_automations_executions503_error1 import ApiV1AutomationsExecutions503Error1
from ..models.api_v1_automations_executions504_error1 import ApiV1AutomationsExecutions504Error1

AutomationGetFlowExecutionsErrorBody: TypeAlias = (
    ApiV1AutomationsExecutions400Error1
    | ApiV1AutomationsExecutions401Error1
    | ApiV1AutomationsExecutions403Error1
    | ApiV1AutomationsExecutions404Error1
    | ApiV1AutomationsExecutions429Error1
    | ApiV1AutomationsExecutions500Error1
    | ApiV1AutomationsExecutions502Error1
    | ApiV1AutomationsExecutions503Error1
    | ApiV1AutomationsExecutions504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AutomationGetFlowExecutionsError:
    def map(self, status_code: int, content: bytes) -> AutomationGetFlowExecutionsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AutomationsExecutions400Error1](content)
            case 401:
                return decode_json[ApiV1AutomationsExecutions401Error1](content)
            case 403:
                return decode_json[ApiV1AutomationsExecutions403Error1](content)
            case 404:
                return decode_json[ApiV1AutomationsExecutions404Error1](content)
            case 429:
                return decode_json[ApiV1AutomationsExecutions429Error1](content)
            case 500:
                return decode_json[ApiV1AutomationsExecutions500Error1](content)
            case 502:
                return decode_json[ApiV1AutomationsExecutions502Error1](content)
            case 503:
                return decode_json[ApiV1AutomationsExecutions503Error1](content)
            case 504:
                return decode_json[ApiV1AutomationsExecutions504Error1](content)
            case _:
                return RawError(status_code, content)


automation_get_flow_executions_error_mapper: Final[
    ErrorMapper[AutomationGetFlowExecutionsErrorBody]
] = _AutomationGetFlowExecutionsError()
