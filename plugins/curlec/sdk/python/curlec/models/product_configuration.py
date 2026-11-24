from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .active_configuration import ActiveConfiguration, ActiveConfigurationDict
from .enums.activation_status import ActivationStatusOrStr
from .enums.product_name import ProductNameOrStr
from .requirement import Requirement, RequirementDict
from .tnc import Tnc, TncDict


class ProductConfiguration(SdkBaseModel):
    """Route product configuration for a Linked Account. Controls settlement account details and tracks activation
    status. Prefix: acc_prd_"""

    id: Optional[str] = UNSET
    """Product configuration ID. Prefix: acc_prd_"""

    account_id: Optional[str] = UNSET
    """Linked Account ID this configuration belongs to."""

    product_name: Optional[ProductNameOrStr] = UNSET
    """Product name. Always 'route' for Route product."""

    activation_status: Optional[ActivationStatusOrStr] = UNSET
    """Current activation status. Progresses from requested → under_review → activated. needs_clarification requires
    additional info from the merchant."""

    tnc: Optional[Tnc] = UNSET
    requested_configuration: Optional[Any] = UNSET
    """Configuration details provided during activation request."""

    active_configuration: Optional[ActiveConfiguration] = UNSET
    requirements: Optional[list[Requirement]] = UNSET
    """List of pending requirements needed for activation."""

    requested_at: Optional[int] = UNSET
    """Unix timestamp when product was requested."""


class ProductConfigurationDict(TypedDict):
    id: NotRequired[str]
    account_id: NotRequired[str]
    product_name: NotRequired[ProductNameOrStr]
    activation_status: NotRequired[ActivationStatusOrStr]
    tnc: NotRequired[TncDict]
    requested_configuration: NotRequired[Any]
    active_configuration: NotRequired[ActiveConfigurationDict]
    requirements: NotRequired[list[RequirementDict]]
    requested_at: NotRequired[int]
