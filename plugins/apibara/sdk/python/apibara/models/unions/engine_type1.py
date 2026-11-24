from __future__ import annotations

from typing import TypeAlias

from ..enums.engine_type import EngineTypeOrStr

EngineType1: TypeAlias = EngineTypeOrStr | list[EngineTypeOrStr]

EngineType1Dict: TypeAlias = EngineTypeOrStr | list[EngineTypeOrStr]
