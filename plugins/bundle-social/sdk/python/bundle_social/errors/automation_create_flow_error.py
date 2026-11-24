from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_automations400_error1 import ApiV1Automations400Error1
from ..models.api_v1_automations401_error1 import ApiV1Automations401Error1
from ..models.api_v1_automations403_error1 import ApiV1Automations403Error1
from ..models.api_v1_automations404_error1 import ApiV1Automations404Error1
from ..models.api_v1_automations429_error1 import ApiV1Automations429Error1
from ..models.api_v1_automations500_error1 import ApiV1Automations500Error1
from ..models.api_v1_automations502_error1 import ApiV1Automations502Error1
from ..models.api_v1_automations503_error1 import ApiV1Automations503Error1
from ..models.api_v1_automations504_error1 import ApiV1Automations504Error1

AutomationCreateFlowErrorBody: TypeAlias = (
    ApiV1Automations400Error1
    | ApiV1Automations401Error1
    | ApiV1Automations403Error1
    | ApiV1Automations404Error1
    | ApiV1Automations429Error1
    | ApiV1Automations500Error1
    | ApiV1Automations502Error1
    | ApiV1Automations503Error1
    | ApiV1Automations504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AutomationCreateFlowError:
    def map(self, status_code: int, content: bytes) -> AutomationCreateFlowErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1Automations400Error1](content)
            case 401:
                return decode_json[ApiV1Automations401Error1](content)
            case 403:
                return decode_json[ApiV1Automations403Error1](content)
            case 404:
                return decode_json[ApiV1Automations404Error1](content)
            case 429:
                return decode_json[ApiV1Automations429Error1](content)
            case 500:
                return decode_json[ApiV1Automations500Error1](content)
            case 502:
                return decode_json[ApiV1Automations502Error1](content)
            case 503:
                return decode_json[ApiV1Automations503Error1](content)
            case 504:
                return decode_json[ApiV1Automations504Error1](content)
            case _:
                return RawError(status_code, content)


automation_create_flow_error_mapper: Final[ErrorMapper[AutomationCreateFlowErrorBody]] = _AutomationCreateFlowError()
