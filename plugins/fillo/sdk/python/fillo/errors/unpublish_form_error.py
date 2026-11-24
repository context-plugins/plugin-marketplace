from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UnpublishFormErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UnpublishFormError:
    def map(self, status_code: int, content: bytes) -> UnpublishFormErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 413 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


unpublish_form_error_mapper: Final[ErrorMapper[UnpublishFormErrorBody]] = _UnpublishFormError()
