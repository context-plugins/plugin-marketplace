from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

OverridesControllerFindOverridesForFeatureErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _OverridesControllerFindOverridesForFeatureError:
    def map(self, status_code: int, content: bytes) -> OverridesControllerFindOverridesForFeatureErrorBody:
        match status_code:
            case 401 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


overrides_controller_find_overrides_for_feature_error_mapper: Final[
    ErrorMapper[OverridesControllerFindOverridesForFeatureErrorBody]
] = _OverridesControllerFindOverridesForFeatureError()
