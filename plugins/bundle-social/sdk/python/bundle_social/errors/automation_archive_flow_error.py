from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_automations_archive400_error1 import ApiV1AutomationsArchive400Error1
from ..models.api_v1_automations_archive401_error1 import ApiV1AutomationsArchive401Error1
from ..models.api_v1_automations_archive403_error1 import ApiV1AutomationsArchive403Error1
from ..models.api_v1_automations_archive404_error1 import ApiV1AutomationsArchive404Error1
from ..models.api_v1_automations_archive429_error1 import ApiV1AutomationsArchive429Error1
from ..models.api_v1_automations_archive500_error1 import ApiV1AutomationsArchive500Error1
from ..models.api_v1_automations_archive502_error1 import ApiV1AutomationsArchive502Error1
from ..models.api_v1_automations_archive503_error1 import ApiV1AutomationsArchive503Error1
from ..models.api_v1_automations_archive504_error1 import ApiV1AutomationsArchive504Error1

AutomationArchiveFlowErrorBody: TypeAlias = (
    ApiV1AutomationsArchive400Error1
    | ApiV1AutomationsArchive401Error1
    | ApiV1AutomationsArchive403Error1
    | ApiV1AutomationsArchive404Error1
    | ApiV1AutomationsArchive429Error1
    | ApiV1AutomationsArchive500Error1
    | ApiV1AutomationsArchive502Error1
    | ApiV1AutomationsArchive503Error1
    | ApiV1AutomationsArchive504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AutomationArchiveFlowError:
    def map(self, status_code: int, content: bytes) -> AutomationArchiveFlowErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AutomationsArchive400Error1](content)
            case 401:
                return decode_json[ApiV1AutomationsArchive401Error1](content)
            case 403:
                return decode_json[ApiV1AutomationsArchive403Error1](content)
            case 404:
                return decode_json[ApiV1AutomationsArchive404Error1](content)
            case 429:
                return decode_json[ApiV1AutomationsArchive429Error1](content)
            case 500:
                return decode_json[ApiV1AutomationsArchive500Error1](content)
            case 502:
                return decode_json[ApiV1AutomationsArchive502Error1](content)
            case 503:
                return decode_json[ApiV1AutomationsArchive503Error1](content)
            case 504:
                return decode_json[ApiV1AutomationsArchive504Error1](content)
            case _:
                return RawError(status_code, content)


automation_archive_flow_error_mapper: Final[ErrorMapper[AutomationArchiveFlowErrorBody]] = _AutomationArchiveFlowError()
