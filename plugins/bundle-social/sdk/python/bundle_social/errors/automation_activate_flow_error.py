from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_automations_activate400_error1 import ApiV1AutomationsActivate400Error1
from ..models.api_v1_automations_activate401_error1 import ApiV1AutomationsActivate401Error1
from ..models.api_v1_automations_activate403_error1 import ApiV1AutomationsActivate403Error1
from ..models.api_v1_automations_activate404_error1 import ApiV1AutomationsActivate404Error1
from ..models.api_v1_automations_activate429_error1 import ApiV1AutomationsActivate429Error1
from ..models.api_v1_automations_activate500_error1 import ApiV1AutomationsActivate500Error1
from ..models.api_v1_automations_activate502_error1 import ApiV1AutomationsActivate502Error1
from ..models.api_v1_automations_activate503_error1 import ApiV1AutomationsActivate503Error1
from ..models.api_v1_automations_activate504_error1 import ApiV1AutomationsActivate504Error1

AutomationActivateFlowErrorBody: TypeAlias = (
    ApiV1AutomationsActivate400Error1
    | ApiV1AutomationsActivate401Error1
    | ApiV1AutomationsActivate403Error1
    | ApiV1AutomationsActivate404Error1
    | ApiV1AutomationsActivate429Error1
    | ApiV1AutomationsActivate500Error1
    | ApiV1AutomationsActivate502Error1
    | ApiV1AutomationsActivate503Error1
    | ApiV1AutomationsActivate504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AutomationActivateFlowError:
    def map(self, status_code: int, content: bytes) -> AutomationActivateFlowErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AutomationsActivate400Error1](content)
            case 401:
                return decode_json[ApiV1AutomationsActivate401Error1](content)
            case 403:
                return decode_json[ApiV1AutomationsActivate403Error1](content)
            case 404:
                return decode_json[ApiV1AutomationsActivate404Error1](content)
            case 429:
                return decode_json[ApiV1AutomationsActivate429Error1](content)
            case 500:
                return decode_json[ApiV1AutomationsActivate500Error1](content)
            case 502:
                return decode_json[ApiV1AutomationsActivate502Error1](content)
            case 503:
                return decode_json[ApiV1AutomationsActivate503Error1](content)
            case 504:
                return decode_json[ApiV1AutomationsActivate504Error1](content)
            case _:
                return RawError(status_code, content)


automation_activate_flow_error_mapper: Final[
    ErrorMapper[AutomationActivateFlowErrorBody]
] = _AutomationActivateFlowError()
