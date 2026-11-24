from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_automations_publish400_error1 import ApiV1AutomationsPublish400Error1
from ..models.api_v1_automations_publish401_error1 import ApiV1AutomationsPublish401Error1
from ..models.api_v1_automations_publish403_error1 import ApiV1AutomationsPublish403Error1
from ..models.api_v1_automations_publish404_error1 import ApiV1AutomationsPublish404Error1
from ..models.api_v1_automations_publish429_error1 import ApiV1AutomationsPublish429Error1
from ..models.api_v1_automations_publish500_error1 import ApiV1AutomationsPublish500Error1
from ..models.api_v1_automations_publish502_error1 import ApiV1AutomationsPublish502Error1
from ..models.api_v1_automations_publish503_error1 import ApiV1AutomationsPublish503Error1
from ..models.api_v1_automations_publish504_error1 import ApiV1AutomationsPublish504Error1

AutomationPublishFlowErrorBody: TypeAlias = (
    ApiV1AutomationsPublish400Error1
    | ApiV1AutomationsPublish401Error1
    | ApiV1AutomationsPublish403Error1
    | ApiV1AutomationsPublish404Error1
    | ApiV1AutomationsPublish429Error1
    | ApiV1AutomationsPublish500Error1
    | ApiV1AutomationsPublish502Error1
    | ApiV1AutomationsPublish503Error1
    | ApiV1AutomationsPublish504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AutomationPublishFlowError:
    def map(self, status_code: int, content: bytes) -> AutomationPublishFlowErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AutomationsPublish400Error1](content)
            case 401:
                return decode_json[ApiV1AutomationsPublish401Error1](content)
            case 403:
                return decode_json[ApiV1AutomationsPublish403Error1](content)
            case 404:
                return decode_json[ApiV1AutomationsPublish404Error1](content)
            case 429:
                return decode_json[ApiV1AutomationsPublish429Error1](content)
            case 500:
                return decode_json[ApiV1AutomationsPublish500Error1](content)
            case 502:
                return decode_json[ApiV1AutomationsPublish502Error1](content)
            case 503:
                return decode_json[ApiV1AutomationsPublish503Error1](content)
            case 504:
                return decode_json[ApiV1AutomationsPublish504Error1](content)
            case _:
                return RawError(status_code, content)


automation_publish_flow_error_mapper: Final[ErrorMapper[AutomationPublishFlowErrorBody]] = _AutomationPublishFlowError()
