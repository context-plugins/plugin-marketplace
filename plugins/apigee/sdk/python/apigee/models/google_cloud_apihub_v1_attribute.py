from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.data_type3 import DataType3OrStr
from .enums.definition_type import DefinitionTypeOrStr
from .enums.scope import ScopeOrStr
from .google_cloud_apihub_v1_allowed_value import GoogleCloudApihubV1AllowedValue, GoogleCloudApihubV1AllowedValueDict


class GoogleCloudApihubV1Attribute(SdkBaseModel):
    """An attribute in the API Hub. An attribute is a name value pair which can be attached to different resources in
    the API hub based on the scope of the attribute. Attributes can either be pre-defined by the API Hub or created by
    users."""

    data_type: Optional[DataType3OrStr] = Field(default=UNSET, alias="dataType")
    """Required. The type of the data of the attribute."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time at which the attribute was last updated."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time at which the attribute was created."""

    name: Optional[str] = UNSET
    """Identifier. The name of the attribute in the API Hub. Format:
    ``projects/{project}/locations/{location}/attributes/{attribute}``"""

    mandatory: Optional[bool] = UNSET
    """Output only. When mandatory is true, the attribute is mandatory for the resource specified in the scope. Only
    System defined attributes can be mandatory."""

    description: Optional[str] = UNSET
    """Optional. The description of the attribute."""

    definition_type: Optional[DefinitionTypeOrStr] = Field(default=UNSET, alias="definitionType")
    """Output only. The definition type of the attribute."""

    cardinality: Optional[int] = UNSET
    """Optional. The maximum number of values that the attribute can have when associated with an API Hub resource.
    Cardinality 1 would represent a single-valued attribute. It must not be less than 1 or greater than 20. If not
    specified, the cardinality would be set to 1 by default and represent a single-valued attribute."""

    allowed_values: Optional[list[GoogleCloudApihubV1AllowedValue]] = Field(default=UNSET, alias="allowedValues")
    """Optional. The list of allowed values when the attribute value is of type enum. This is required when the
    data_type of the attribute is ENUM. The maximum number of allowed values of an attribute will be 1000."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. The display name of the attribute."""

    scope: Optional[ScopeOrStr] = UNSET
    """Required. The scope of the attribute. It represents the resource in the API Hub to which the attribute can be
    linked."""


class GoogleCloudApihubV1AttributeDict(TypedDict):
    data_type: NotRequired[DataType3OrStr]
    update_time: NotRequired[str]
    create_time: NotRequired[str]
    name: NotRequired[str]
    mandatory: NotRequired[bool]
    description: NotRequired[str]
    definition_type: NotRequired[DefinitionTypeOrStr]
    cardinality: NotRequired[int]
    allowed_values: NotRequired[list[GoogleCloudApihubV1AllowedValueDict]]
    display_name: NotRequired[str]
    scope: NotRequired[ScopeOrStr]
