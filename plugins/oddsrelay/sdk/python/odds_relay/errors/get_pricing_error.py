from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error400 import Error400
from ..models.error401 import Error401
from ..models.error403 import Error403
from ..models.error429 import Error429
from ..models.error500 import Error500
from ..models.error503 import Error503

GetPricingErrorBody: TypeAlias = Error400 | Error401 | Error403 | Error429 | Error500 | Error503 | RawError


@dataclass(frozen=True, slots=True)
class _GetPricingError:
    def map(self, status_code: int, content: bytes) -> GetPricingErrorBody:
        match status_code:
            case 400:
                return decode_json[Error400](content)
            case 401:
                return decode_json[Error401](content)
            case 403:
                return decode_json[Error403](content)
            case 429:
                return decode_json[Error429](content)
            case 500:
                return decode_json[Error500](content)
            case 502:
                return RawError(status_code, content)
            case 503:
                return decode_json[Error503](content)
            case _:
                return RawError(status_code, content)


get_pricing_error_mapper: Final[ErrorMapper[GetPricingErrorBody]] = _GetPricingError()
