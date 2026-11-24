from __future__ import annotations

from typing import TypeAlias

from ..config1 import Config1, Config1Dict
from ..config_model import ConfigModel, ConfigModelDict

Config2: TypeAlias = ConfigModel | Config1

Config2Dict: TypeAlias = ConfigModelDict | Config1Dict
