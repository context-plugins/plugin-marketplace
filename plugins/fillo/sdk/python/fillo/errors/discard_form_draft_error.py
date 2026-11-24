from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DiscardFormDraftErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DiscardFormDraftError:
    def map(self, status_code: int, content: bytes) -> DiscardFormDraftErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 413 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


discard_form_draft_error_mapper: Final[ErrorMapper[DiscardFormDraftErrorBody]] = _DiscardFormDraftError()
