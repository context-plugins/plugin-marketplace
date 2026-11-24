from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.validate_error_json import ValidateErrorJson

ListDomainsErrorBody: TypeAlias = ValidateErrorJson | RawError


@dataclass(frozen=True, slots=True)
class _ListDomainsError:
    def map(self, status_code: int, content: bytes) -> ListDomainsErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case 422:
                return decode_json[ValidateErrorJson](content)
            case _:
                return RawError(status_code, content)


list_domains_error_mapper: Final[ErrorMapper[ListDomainsErrorBody]] = _ListDomainsError()
