from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

FeatureConfigsControllerFindAllErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _FeatureConfigsControllerFindAllError:
    def map(self, status_code: int, content: bytes) -> FeatureConfigsControllerFindAllErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


feature_configs_controller_find_all_error_mapper: Final[
    ErrorMapper[FeatureConfigsControllerFindAllErrorBody]
] = _FeatureConfigsControllerFindAllError()
