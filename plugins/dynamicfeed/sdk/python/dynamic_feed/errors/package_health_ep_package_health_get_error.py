from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

PackageHealthEpPackageHealthGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _PackageHealthEpPackageHealthGetError:
    def map(self, status_code: int, content: bytes) -> PackageHealthEpPackageHealthGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


package_health_ep_package_health_get_error_mapper: Final[
    ErrorMapper[PackageHealthEpPackageHealthGetErrorBody]
] = _PackageHealthEpPackageHealthGetError()
