from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.access_denied_exception import AccessDeniedException
from ..models.bad_request_exception import BadRequestException
from ..models.internal_failure_exception import InternalFailureException

ListDomainNamesErrorBody: TypeAlias = BadRequestException | AccessDeniedException | InternalFailureException | RawError


@dataclass(frozen=True, slots=True)
class _ListDomainNamesError:
    def map(self, status_code: int, content: bytes) -> ListDomainNamesErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestException](content)
            case 403:
                return decode_json[AccessDeniedException](content)
            case 500:
                return decode_json[InternalFailureException](content)
            case _:
                return RawError(status_code, content)


list_domain_names_error_mapper: Final[ErrorMapper[ListDomainNamesErrorBody]] = _ListDomainNamesError()
