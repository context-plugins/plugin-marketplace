from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateBgpPeerErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateBgpPeerError:
    def map(self, status_code: int, content: bytes) -> CreateBgpPeerErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_bgp_peer_error_mapper: Final[ErrorMapper[CreateBgpPeerErrorBody]] = _CreateBgpPeerError()
