from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Product(SdkBaseModel):
    product_code: str
    """The retailer's unique product identifier used to match the product in the Instacart system."""

    name: str
    """The display name of the product."""

    brand: Optional[str] = UNSET
    """The brand name of the product."""

    description: Optional[str] = UNSET
    """A detailed description of the product."""

    size: Optional[str] = UNSET
    """The size or quantity description of the product."""

    upc: Optional[str] = UNSET
    """The Universal Product Code for the product."""

    image_url: Optional[str] = UNSET
    """URL to the primary product image."""

    category: Optional[str] = UNSET
    """The product category in the retailer's taxonomy."""

    subcategory: Optional[str] = UNSET
    """The product subcategory."""

    department: Optional[str] = UNSET
    """The store department the product belongs to."""

    attributes: Optional[dict[str, str]] = UNSET
    """Additional product attributes such as dietary information or certifications."""


class ProductDict(TypedDict):
    product_code: str
    name: str
    brand: NotRequired[str]
    description: NotRequired[str]
    size: NotRequired[str]
    upc: NotRequired[str]
    image_url: NotRequired[str]
    category: NotRequired[str]
    subcategory: NotRequired[str]
    department: NotRequired[str]
    attributes: NotRequired[dict[str, str]]
