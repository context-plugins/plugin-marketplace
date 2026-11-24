from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DatumCommonelementsComBulkDeliveryApi(SdkBaseModel):
    dataset_key: Optional[str] = UNSET
    """Stable key to pass as ``dataset`` when requesting a delivery."""

    label: Optional[str] = UNSET
    """Dataset name, for display."""

    description: Optional[str] = UNSET
    """What the dataset contains."""

    required_scopes: Optional[list[str]] = UNSET
    """Scopes a key must carry to request it."""

    required_feature: Optional[str] = UNSET
    """Plan feature the dataset sits behind."""

    supports_snapshot: Optional[bool] = UNSET
    """Whether the dataset can be delivered as a full snapshot."""

    available_to_you: Optional[bool] = UNSET
    """Whether the key on this request may request it, resolved at request time."""


class DatumCommonelementsComBulkDeliveryApiDict(TypedDict):
    dataset_key: NotRequired[str]
    label: NotRequired[str]
    description: NotRequired[str]
    required_scopes: NotRequired[list[str]]
    required_feature: NotRequired[str]
    supports_snapshot: NotRequired[bool]
    available_to_you: NotRequired[bool]
