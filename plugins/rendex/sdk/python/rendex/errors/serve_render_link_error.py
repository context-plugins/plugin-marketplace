from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ServeRenderLinkErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ServeRenderLinkError:
    def map(self, status_code: int, content: bytes) -> ServeRenderLinkErrorBody:
        match status_code:
            case 403:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


serve_render_link_error_mapper: Final[ErrorMapper[ServeRenderLinkErrorBody]] = _ServeRenderLinkError()
