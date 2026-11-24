from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.enrich400_error1 import Enrich400Error1
from ..models.enrich403_error1 import Enrich403Error1
from ..models.enrich500_error1 import Enrich500Error1

EnrichErrorBody: TypeAlias = Enrich400Error1 | Enrich403Error1 | Enrich500Error1 | RawError


@dataclass(frozen=True, slots=True)
class _EnrichError:
    def map(self, status_code: int, content: bytes) -> EnrichErrorBody:
        match status_code:
            case 400:
                return decode_json[Enrich400Error1](content)
            case 403:
                return decode_json[Enrich403Error1](content)
            case 500:
                return decode_json[Enrich500Error1](content)
            case _:
                return RawError(status_code, content)


enrich_error_mapper: Final[ErrorMapper[EnrichErrorBody]] = _EnrichError()
