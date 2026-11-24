from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.data_source import DataSourceOrStr
from .enums.state2_apigee_projects_api import State2ApigeeProjectsApiOrStr
from .google_cloud_apihub_v1_addon_config1 import GoogleCloudApihubV1AddonConfig1, GoogleCloudApihubV1AddonConfig1Dict


class GoogleCloudApihubV1Addon(SdkBaseModel):
    """Addon resource."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time at which the addon was last updated."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. The display name of the addon."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time at which the addon was created."""

    description: Optional[str] = UNSET
    """Optional. The description of the addon."""

    state: Optional[State2ApigeeProjectsApiOrStr] = UNSET
    """Output only. The state of the addon."""

    name: Optional[str] = UNSET
    """Identifier. The name of the addon to enable. Format:
    ``projects/{project}/locations/{location}/addons/{addon}``."""

    data_source: Optional[DataSourceOrStr] = Field(default=UNSET, alias="dataSource")
    """Required. The data source on which the addon operates. This determines which field in the ``config`` oneof is
    used."""

    config: Optional[GoogleCloudApihubV1AddonConfig1] = UNSET
    """Required. The configuration of the addon."""

    boost_spec_gemini_region_id: Optional[str] = Field(default=UNSET, alias="boostSpecGeminiRegionId")
    """Output only. The Vertex AI region where the BoostSpec Gemini model calls run for this API Hub instance. Populated
    only for the SpecGen addon (``system-spec-generation``); other addons leave this field empty. ``gemini-2.5-flash``
    is not available in every API Hub region, so the effective region may differ from the API Hub instance's own region.
    The value follows these semantics: - ``""``: BoostSpec is disabled in this region (the addon is not SpecGen, or the
    API Hub instance region has no configured Gemini endpoint or fallback). - Equal to the API Hub instance region:
    BoostSpec calls run in-region. - Differs from the API Hub instance region: BoostSpec calls run in the specified
    fallback region. Callers rendering this field can derive the three display states from this single field combined
    with the API Hub instance region."""


class GoogleCloudApihubV1AddonDict(TypedDict):
    update_time: NotRequired[str]
    display_name: NotRequired[str]
    create_time: NotRequired[str]
    description: NotRequired[str]
    state: NotRequired[State2ApigeeProjectsApiOrStr]
    name: NotRequired[str]
    data_source: NotRequired[DataSourceOrStr]
    config: NotRequired[GoogleCloudApihubV1AddonConfig1Dict]
    boost_spec_gemini_region_id: NotRequired[str]
