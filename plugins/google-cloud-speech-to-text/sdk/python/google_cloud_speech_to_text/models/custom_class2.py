from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .class_item import ClassItem, ClassItemDict
from .enums.state import StateOrStr


class CustomClass2(SdkBaseModel):
    """Required. The custom class to create."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Output only. User-settable, human-readable name for the CustomClass. Must be 63 characters or less. This field is
    not used."""

    custom_class_id: Optional[str] = Field(default=UNSET, alias="customClassId")
    """If this custom class is a resource, the custom_class_id is the resource id of the CustomClass. Case sensitive."""

    etag: Optional[str] = UNSET
    """Output only. This checksum is computed by the server based on the value of other fields. This may be sent on
    update, undelete, and delete requests to ensure the client has an up-to-date value before proceeding. This field is
    not used."""

    kms_key_version_name: Optional[str] = Field(default=UNSET, alias="kmsKeyVersionName")
    """Output only. The `KMS key version name <https://cloud.google.com/kms/docs/resource-hierarchy#key_versions>`__
    with which content of the ClassItem is encrypted. The expected format is
    ``projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{crypto_key_version}``."""

    name: Optional[str] = UNSET
    """The resource name of the custom class."""

    uid: Optional[str] = UNSET
    """Output only. System-assigned unique identifier for the CustomClass. This field is not used."""

    items: Optional[list[ClassItem]] = UNSET
    """A collection of class items."""

    reconciling: Optional[bool] = UNSET
    """Output only. Whether or not this CustomClass is in the process of being updated. This field is not used."""

    expire_time: Optional[str] = Field(default=UNSET, alias="expireTime")
    """Output only. The time at which this resource will be purged. This field is not used."""

    kms_key_name: Optional[str] = Field(default=UNSET, alias="kmsKeyName")
    """Output only. The `KMS key name <https://cloud.google.com/kms/docs/resource-hierarchy#keys>`__ with which the
    content of the ClassItem is encrypted. The expected format is
    ``projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}``."""

    annotations: Optional[dict[str, str]] = UNSET
    """Output only. Allows users to store small amounts of arbitrary data. Both the key and the value must be 63
    characters or less each. At most 100 annotations. This field is not used."""

    state: Optional[StateOrStr] = UNSET
    """Output only. The CustomClass lifecycle state. This field is not used."""

    delete_time: Optional[str] = Field(default=UNSET, alias="deleteTime")
    """Output only. The time at which this resource was requested for deletion. This field is not used."""


class CustomClass2Dict(TypedDict):
    display_name: NotRequired[str]
    custom_class_id: NotRequired[str]
    etag: NotRequired[str]
    kms_key_version_name: NotRequired[str]
    name: NotRequired[str]
    uid: NotRequired[str]
    items: NotRequired[list[ClassItemDict]]
    reconciling: NotRequired[bool]
    expire_time: NotRequired[str]
    kms_key_name: NotRequired[str]
    annotations: NotRequired[dict[str, str]]
    state: NotRequired[StateOrStr]
    delete_time: NotRequired[str]
