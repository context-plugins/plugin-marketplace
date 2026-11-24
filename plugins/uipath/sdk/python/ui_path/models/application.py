from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Application(SdkBaseModel):
    """A business application entry in the application inventory"""

    id: Optional[int] = UNSET
    """Unique integer identifier of the application"""

    name: str
    """Display name of the application"""

    vendor: Optional[str] = UNSET
    """Vendor or provider of the application"""

    category: Optional[str] = UNSET
    """Category classification of the application"""

    description: Optional[str] = UNSET
    """Optional description of the application"""


class ApplicationDict(TypedDict):
    id: NotRequired[int]
    name: str
    vendor: NotRequired[str]
    category: NotRequired[str]
    description: NotRequired[str]
