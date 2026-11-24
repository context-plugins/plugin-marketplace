from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PluginCategory(str, Enum):
    """Optional. The category of the plugin, identifying its primary category or purpose. This field is required for all
    plugins."""

    PLUGIN_CATEGORY_UNSPECIFIED = "PLUGIN_CATEGORY_UNSPECIFIED"
    API_GATEWAY = "API_GATEWAY"
    API_PRODUCER = "API_PRODUCER"

    __str__ = str.__str__


PluginCategoryOrStr: TypeAlias = Annotated[PluginCategory | str, open_enum_validator(PluginCategory)]
