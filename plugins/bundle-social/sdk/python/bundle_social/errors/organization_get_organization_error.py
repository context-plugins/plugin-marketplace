from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_organization400_error1 import ApiV1Organization400Error1
from ..models.api_v1_organization401_error1 import ApiV1Organization401Error1
from ..models.api_v1_organization403_error1 import ApiV1Organization403Error1
from ..models.api_v1_organization404_error1 import ApiV1Organization404Error1
from ..models.api_v1_organization429_error1 import ApiV1Organization429Error1
from ..models.api_v1_organization500_error1 import ApiV1Organization500Error1
from ..models.api_v1_organization502_error1 import ApiV1Organization502Error1
from ..models.api_v1_organization503_error1 import ApiV1Organization503Error1
from ..models.api_v1_organization504_error1 import ApiV1Organization504Error1

OrganizationGetOrganizationErrorBody: TypeAlias = (
    ApiV1Organization400Error1
    | ApiV1Organization401Error1
    | ApiV1Organization403Error1
    | ApiV1Organization404Error1
    | ApiV1Organization429Error1
    | ApiV1Organization500Error1
    | ApiV1Organization502Error1
    | ApiV1Organization503Error1
    | ApiV1Organization504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _OrganizationGetOrganizationError:
    def map(self, status_code: int, content: bytes) -> OrganizationGetOrganizationErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1Organization400Error1](content)
            case 401:
                return decode_json[ApiV1Organization401Error1](content)
            case 403:
                return decode_json[ApiV1Organization403Error1](content)
            case 404:
                return decode_json[ApiV1Organization404Error1](content)
            case 429:
                return decode_json[ApiV1Organization429Error1](content)
            case 500:
                return decode_json[ApiV1Organization500Error1](content)
            case 502:
                return decode_json[ApiV1Organization502Error1](content)
            case 503:
                return decode_json[ApiV1Organization503Error1](content)
            case 504:
                return decode_json[ApiV1Organization504Error1](content)
            case _:
                return RawError(status_code, content)


organization_get_organization_error_mapper: Final[
    ErrorMapper[OrganizationGetOrganizationErrorBody]
] = _OrganizationGetOrganizationError()
