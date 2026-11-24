from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteBgpPeerErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteBgpPeerError:
    def map(self, status_code: int, content: bytes) -> DeleteBgpPeerErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_bgp_peer_error_mapper: Final[ErrorMapper[DeleteBgpPeerErrorBody]] = _DeleteBgpPeerError()
