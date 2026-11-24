from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateNetworkAclErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateNetworkAclError:
    def map(self, status_code: int, content: bytes) -> CreateNetworkAclErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_network_acl_error_mapper: Final[ErrorMapper[CreateNetworkAclErrorBody]] = _CreateNetworkAclError()
