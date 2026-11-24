from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.concurrent_modification_exception import ConcurrentModificationException
from ..models.not_found_exception import NotFoundException
from ..models.unauthorized_exception import UnauthorizedException

GetResolverErrorBody: TypeAlias = UnauthorizedException | NotFoundException | ConcurrentModificationException | RawError


@dataclass(frozen=True, slots=True)
class _GetResolverError:
    def map(self, status_code: int, content: bytes) -> GetResolverErrorBody:
        match status_code:
            case 401:
                return decode_json[UnauthorizedException](content)
            case 404:
                return decode_json[NotFoundException](content)
            case 409:
                return decode_json[ConcurrentModificationException](content)
            case _:
                return RawError(status_code, content)


get_resolver_error_mapper: Final[ErrorMapper[GetResolverErrorBody]] = _GetResolverError()
