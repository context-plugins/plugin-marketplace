from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state import StateOrStr
from .phrase import Phrase, PhraseDict


class PhraseSet2(SdkBaseModel):
    """Required. The phrase set to create."""

    annotations: Optional[dict[str, str]] = UNSET
    """Output only. Allows users to store small amounts of arbitrary data. Both the key and the value must be 63
    characters or less each. At most 100 annotations. This field is not used."""

    kms_key_version_name: Optional[str] = Field(default=UNSET, alias="kmsKeyVersionName")
    """Output only. The `KMS key version name <https://cloud.google.com/kms/docs/resource-hierarchy#key_versions>`__
    with which content of the PhraseSet is encrypted. The expected format is
    ``projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{crypto_key_version}``."""

    expire_time: Optional[str] = Field(default=UNSET, alias="expireTime")
    """Output only. The time at which this resource will be purged. This field is not used."""

    kms_key_name: Optional[str] = Field(default=UNSET, alias="kmsKeyName")
    """Output only. The `KMS key name <https://cloud.google.com/kms/docs/resource-hierarchy#keys>`__ with which the
    content of the PhraseSet is encrypted. The expected format is
    ``projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}``."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Output only. User-settable, human-readable name for the PhraseSet. Must be 63 characters or less. This field is
    not used."""

    state: Optional[StateOrStr] = UNSET
    """Output only. The CustomClass lifecycle state. This field is not used."""

    name: Optional[str] = UNSET
    """The resource name of the phrase set."""

    uid: Optional[str] = UNSET
    """Output only. System-assigned unique identifier for the PhraseSet. This field is not used."""

    boost: Optional[float] = UNSET
    """Hint Boost. Positive value will increase the probability that a specific phrase will be recognized over other
    similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well.
    Negative boost values would correspond to anti-biasing. Anti-biasing is not enabled, so negative boost will simply
    be ignored. Though ``boost`` can accept a wide range of positive values, most use cases are best served with values
    between 0 (exclusive) and 20. We recommend using a binary search approach to finding the optimal value for your use
    case as well as adding phrases both with and without boost to your requests."""

    etag: Optional[str] = UNSET
    """Output only. This checksum is computed by the server based on the value of other fields. This may be sent on
    update, undelete, and delete requests to ensure the client has an up-to-date value before proceeding. This field is
    not used."""

    reconciling: Optional[bool] = UNSET
    """Output only. Whether or not this PhraseSet is in the process of being updated. This field is not used."""

    phrases: Optional[list[Phrase]] = UNSET
    """A list of word and phrases."""

    delete_time: Optional[str] = Field(default=UNSET, alias="deleteTime")
    """Output only. The time at which this resource was requested for deletion. This field is not used."""


class PhraseSet2Dict(TypedDict):
    annotations: NotRequired[dict[str, str]]
    kms_key_version_name: NotRequired[str]
    expire_time: NotRequired[str]
    kms_key_name: NotRequired[str]
    display_name: NotRequired[str]
    state: NotRequired[StateOrStr]
    name: NotRequired[str]
    uid: NotRequired[str]
    boost: NotRequired[float]
    etag: NotRequired[str]
    reconciling: NotRequired[bool]
    phrases: NotRequired[list[PhraseDict]]
    delete_time: NotRequired[str]
