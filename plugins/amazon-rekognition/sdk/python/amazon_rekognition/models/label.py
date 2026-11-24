from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .instance import Instance, InstanceDict
from .label_alias import LabelAlias, LabelAliasDict
from .label_category import LabelCategory, LabelCategoryDict
from .parent import Parent, ParentDict


class Label(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name (label) of the object or scene."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """Level of confidence."""

    instances: Optional[list[Instance]] = Field(default=UNSET, alias="Instances")
    """If Label represents an object, Instances contains the bounding boxes for each instance of the detected object.
    Bounding boxes are returned for common object labels such as people, cars, furniture, apparel or pets."""

    parents: Optional[list[Parent]] = Field(default=UNSET, alias="Parents")
    """The parent labels for a label. The response includes all ancestor labels."""

    aliases: Optional[list[LabelAlias]] = Field(default=UNSET, alias="Aliases")
    """A list of potential aliases for a given label."""

    categories: Optional[list[LabelCategory]] = Field(default=UNSET, alias="Categories")
    """A list of the categories associated with a given label."""


class LabelDict(TypedDict):
    name: NotRequired[str]
    confidence: NotRequired[float]
    instances: NotRequired[list[InstanceDict]]
    parents: NotRequired[list[ParentDict]]
    aliases: NotRequired[list[LabelAliasDict]]
    categories: NotRequired[list[LabelCategoryDict]]
