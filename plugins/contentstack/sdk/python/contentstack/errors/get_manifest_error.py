from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_contentstack_personalize_management_attributes_api import (
    ErrorContentstackPersonalizeManagementAttributesApi,
)

GetManifestErrorBody: TypeAlias = ErrorContentstackPersonalizeManagementAttributesApi | RawError


@dataclass(frozen=True, slots=True)
class _GetManifestError:
    def map(self, status_code: int, content: bytes) -> GetManifestErrorBody:
        match status_code:
            case 400 | 403:
                return decode_json[ErrorContentstackPersonalizeManagementAttributesApi](content)
            case _:
                return RawError(status_code, content)


get_manifest_error_mapper: Final[ErrorMapper[GetManifestErrorBody]] = _GetManifestError()
