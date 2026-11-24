from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .landing_page_configuration import LandingPageConfiguration, LandingPageConfigurationDict
from .line_item import LineItem, LineItemDict


class ShoppingListRequest(SdkBaseModel):
    title: str
    """The title displayed at the top of the shopping list page."""

    image_url: Optional[str] = UNSET
    """URL of an image to display on the shopping list page."""

    link_type: Optional[str] = UNSET
    """The type of product link to create."""

    expires_in: Optional[int] = UNSET
    """The number of seconds until the generated link expires."""

    instructions: Optional[str] = UNSET
    """Additional instructions or notes to display on the page."""

    line_items: list[LineItem]
    """The list of products to include on the shopping list page."""

    landing_page_configuration: Optional[LandingPageConfiguration] = UNSET
    """Configuration options for the landing page appearance and behavior."""


class ShoppingListRequestDict(TypedDict):
    title: str
    image_url: NotRequired[str]
    link_type: NotRequired[str]
    expires_in: NotRequired[int]
    instructions: NotRequired[str]
    line_items: list[LineItemDict]
    landing_page_configuration: NotRequired[LandingPageConfigurationDict]
