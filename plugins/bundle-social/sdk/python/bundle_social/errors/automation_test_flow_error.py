from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_automations_test400_error1 import ApiV1AutomationsTest400Error1
from ..models.api_v1_automations_test401_error1 import ApiV1AutomationsTest401Error1
from ..models.api_v1_automations_test403_error1 import ApiV1AutomationsTest403Error1
from ..models.api_v1_automations_test404_error1 import ApiV1AutomationsTest404Error1
from ..models.api_v1_automations_test429_error1 import ApiV1AutomationsTest429Error1
from ..models.api_v1_automations_test500_error1 import ApiV1AutomationsTest500Error1
from ..models.api_v1_automations_test502_error1 import ApiV1AutomationsTest502Error1
from ..models.api_v1_automations_test503_error1 import ApiV1AutomationsTest503Error1
from ..models.api_v1_automations_test504_error1 import ApiV1AutomationsTest504Error1

AutomationTestFlowErrorBody: TypeAlias = (
    ApiV1AutomationsTest400Error1
    | ApiV1AutomationsTest401Error1
    | ApiV1AutomationsTest403Error1
    | ApiV1AutomationsTest404Error1
    | ApiV1AutomationsTest429Error1
    | ApiV1AutomationsTest500Error1
    | ApiV1AutomationsTest502Error1
    | ApiV1AutomationsTest503Error1
    | ApiV1AutomationsTest504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AutomationTestFlowError:
    def map(self, status_code: int, content: bytes) -> AutomationTestFlowErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AutomationsTest400Error1](content)
            case 401:
                return decode_json[ApiV1AutomationsTest401Error1](content)
            case 403:
                return decode_json[ApiV1AutomationsTest403Error1](content)
            case 404:
                return decode_json[ApiV1AutomationsTest404Error1](content)
            case 429:
                return decode_json[ApiV1AutomationsTest429Error1](content)
            case 500:
                return decode_json[ApiV1AutomationsTest500Error1](content)
            case 502:
                return decode_json[ApiV1AutomationsTest502Error1](content)
            case 503:
                return decode_json[ApiV1AutomationsTest503Error1](content)
            case 504:
                return decode_json[ApiV1AutomationsTest504Error1](content)
            case _:
                return RawError(status_code, content)


automation_test_flow_error_mapper: Final[ErrorMapper[AutomationTestFlowErrorBody]] = _AutomationTestFlowError()
