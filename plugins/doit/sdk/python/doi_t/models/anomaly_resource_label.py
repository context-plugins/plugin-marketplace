from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AnomalyResourceLabel(SdkBaseModel):
    """A single label (a.k.a. cost-allocation tag) on the resource, paired with the resource's cost tagged with this
    key/value pair."""

    key: Optional[str] = UNSET
    """The label/tag key."""

    value: Optional[str] = UNSET
    """The label/tag value."""

    cost: Optional[float] = UNSET
    """The resource's cost tagged with this key/value pair; typically equal to the resource's cost, since labels/tags
    usually cover all of its spend."""


class AnomalyResourceLabelDict(TypedDict):
    key: NotRequired[str]
    value: NotRequired[str]
    cost: NotRequired[float]
