from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_automations_pause400_error1 import ApiV1AutomationsPause400Error1
from ..models.api_v1_automations_pause401_error1 import ApiV1AutomationsPause401Error1
from ..models.api_v1_automations_pause403_error1 import ApiV1AutomationsPause403Error1
from ..models.api_v1_automations_pause404_error1 import ApiV1AutomationsPause404Error1
from ..models.api_v1_automations_pause429_error1 import ApiV1AutomationsPause429Error1
from ..models.api_v1_automations_pause500_error1 import ApiV1AutomationsPause500Error1
from ..models.api_v1_automations_pause502_error1 import ApiV1AutomationsPause502Error1
from ..models.api_v1_automations_pause503_error1 import ApiV1AutomationsPause503Error1
from ..models.api_v1_automations_pause504_error1 import ApiV1AutomationsPause504Error1

AutomationPauseFlowErrorBody: TypeAlias = (
    ApiV1AutomationsPause400Error1
    | ApiV1AutomationsPause401Error1
    | ApiV1AutomationsPause403Error1
    | ApiV1AutomationsPause404Error1
    | ApiV1AutomationsPause429Error1
    | ApiV1AutomationsPause500Error1
    | ApiV1AutomationsPause502Error1
    | ApiV1AutomationsPause503Error1
    | ApiV1AutomationsPause504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AutomationPauseFlowError:
    def map(self, status_code: int, content: bytes) -> AutomationPauseFlowErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AutomationsPause400Error1](content)
            case 401:
                return decode_json[ApiV1AutomationsPause401Error1](content)
            case 403:
                return decode_json[ApiV1AutomationsPause403Error1](content)
            case 404:
                return decode_json[ApiV1AutomationsPause404Error1](content)
            case 429:
                return decode_json[ApiV1AutomationsPause429Error1](content)
            case 500:
                return decode_json[ApiV1AutomationsPause500Error1](content)
            case 502:
                return decode_json[ApiV1AutomationsPause502Error1](content)
            case 503:
                return decode_json[ApiV1AutomationsPause503Error1](content)
            case 504:
                return decode_json[ApiV1AutomationsPause504Error1](content)
            case _:
                return RawError(status_code, content)


automation_pause_flow_error_mapper: Final[ErrorMapper[AutomationPauseFlowErrorBody]] = _AutomationPauseFlowError()
