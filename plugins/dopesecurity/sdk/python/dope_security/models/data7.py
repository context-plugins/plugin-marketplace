from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .custom2 import Custom2, Custom2Dict
from .default1 import Default1, Default1Dict


class Data7(SdkBaseModel):
    inherits_from_base: bool = Field(alias="inheritsFromBase")
    """Whether the application bypass configuration is inherited from the base policy"""

    custom: Custom2
    """Custom application bypass entries defined by the admin"""

    default: Default1
    """Default application bypass entries with their toggle states"""


class Data7Dict(TypedDict):
    inherits_from_base: bool
    custom: Custom2Dict
    default: Default1Dict
