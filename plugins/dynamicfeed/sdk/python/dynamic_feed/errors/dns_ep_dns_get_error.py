from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

DnsEpDnsGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _DnsEpDnsGetError:
    def map(self, status_code: int, content: bytes) -> DnsEpDnsGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


dns_ep_dns_get_error_mapper: Final[ErrorMapper[DnsEpDnsGetErrorBody]] = _DnsEpDnsGetError()
