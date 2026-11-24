from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_automations_copy400_error1 import ApiV1AutomationsCopy400Error1
from ..models.api_v1_automations_copy401_error1 import ApiV1AutomationsCopy401Error1
from ..models.api_v1_automations_copy403_error1 import ApiV1AutomationsCopy403Error1
from ..models.api_v1_automations_copy404_error1 import ApiV1AutomationsCopy404Error1
from ..models.api_v1_automations_copy429_error1 import ApiV1AutomationsCopy429Error1
from ..models.api_v1_automations_copy500_error1 import ApiV1AutomationsCopy500Error1
from ..models.api_v1_automations_copy502_error1 import ApiV1AutomationsCopy502Error1
from ..models.api_v1_automations_copy503_error1 import ApiV1AutomationsCopy503Error1
from ..models.api_v1_automations_copy504_error1 import ApiV1AutomationsCopy504Error1

AutomationCopyFlowsErrorBody: TypeAlias = (
    ApiV1AutomationsCopy400Error1
    | ApiV1AutomationsCopy401Error1
    | ApiV1AutomationsCopy403Error1
    | ApiV1AutomationsCopy404Error1
    | ApiV1AutomationsCopy429Error1
    | ApiV1AutomationsCopy500Error1
    | ApiV1AutomationsCopy502Error1
    | ApiV1AutomationsCopy503Error1
    | ApiV1AutomationsCopy504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AutomationCopyFlowsError:
    def map(self, status_code: int, content: bytes) -> AutomationCopyFlowsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AutomationsCopy400Error1](content)
            case 401:
                return decode_json[ApiV1AutomationsCopy401Error1](content)
            case 403:
                return decode_json[ApiV1AutomationsCopy403Error1](content)
            case 404:
                return decode_json[ApiV1AutomationsCopy404Error1](content)
            case 429:
                return decode_json[ApiV1AutomationsCopy429Error1](content)
            case 500:
                return decode_json[ApiV1AutomationsCopy500Error1](content)
            case 502:
                return decode_json[ApiV1AutomationsCopy502Error1](content)
            case 503:
                return decode_json[ApiV1AutomationsCopy503Error1](content)
            case 504:
                return decode_json[ApiV1AutomationsCopy504Error1](content)
            case _:
                return RawError(status_code, content)


automation_copy_flows_error_mapper: Final[ErrorMapper[AutomationCopyFlowsErrorBody]] = _AutomationCopyFlowsError()
