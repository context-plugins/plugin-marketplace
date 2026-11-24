from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_organization_usage_messages400_error1 import ApiV1OrganizationUsageMessages400Error1
from ..models.api_v1_organization_usage_messages401_error1 import ApiV1OrganizationUsageMessages401Error1
from ..models.api_v1_organization_usage_messages403_error1 import ApiV1OrganizationUsageMessages403Error1
from ..models.api_v1_organization_usage_messages404_error1 import ApiV1OrganizationUsageMessages404Error1
from ..models.api_v1_organization_usage_messages429_error1 import ApiV1OrganizationUsageMessages429Error1
from ..models.api_v1_organization_usage_messages500_error1 import ApiV1OrganizationUsageMessages500Error1
from ..models.api_v1_organization_usage_messages502_error1 import ApiV1OrganizationUsageMessages502Error1
from ..models.api_v1_organization_usage_messages503_error1 import ApiV1OrganizationUsageMessages503Error1
from ..models.api_v1_organization_usage_messages504_error1 import ApiV1OrganizationUsageMessages504Error1

OrganizationGetMessagesUsageErrorBody: TypeAlias = (
    ApiV1OrganizationUsageMessages400Error1
    | ApiV1OrganizationUsageMessages401Error1
    | ApiV1OrganizationUsageMessages403Error1
    | ApiV1OrganizationUsageMessages404Error1
    | ApiV1OrganizationUsageMessages429Error1
    | ApiV1OrganizationUsageMessages500Error1
    | ApiV1OrganizationUsageMessages502Error1
    | ApiV1OrganizationUsageMessages503Error1
    | ApiV1OrganizationUsageMessages504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _OrganizationGetMessagesUsageError:
    def map(self, status_code: int, content: bytes) -> OrganizationGetMessagesUsageErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1OrganizationUsageMessages400Error1](content)
            case 401:
                return decode_json[ApiV1OrganizationUsageMessages401Error1](content)
            case 403:
                return decode_json[ApiV1OrganizationUsageMessages403Error1](content)
            case 404:
                return decode_json[ApiV1OrganizationUsageMessages404Error1](content)
            case 429:
                return decode_json[ApiV1OrganizationUsageMessages429Error1](content)
            case 500:
                return decode_json[ApiV1OrganizationUsageMessages500Error1](content)
            case 502:
                return decode_json[ApiV1OrganizationUsageMessages502Error1](content)
            case 503:
                return decode_json[ApiV1OrganizationUsageMessages503Error1](content)
            case 504:
                return decode_json[ApiV1OrganizationUsageMessages504Error1](content)
            case _:
                return RawError(status_code, content)


organization_get_messages_usage_error_mapper: Final[
    ErrorMapper[OrganizationGetMessagesUsageErrorBody]
] = _OrganizationGetMessagesUsageError()
