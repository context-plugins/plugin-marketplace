from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .automatic_tape_creation_policy_info import AutomaticTapeCreationPolicyInfo, AutomaticTapeCreationPolicyInfoDict


class ListAutomaticTapeCreationPoliciesOutput(SdkBaseModel):
    automatic_tape_creation_policy_infos: Optional[list[AutomaticTapeCreationPolicyInfo]] = Field(
        default=UNSET, alias="AutomaticTapeCreationPolicyInfos"
    )
    """Gets a listing of information about the gateway's automatic tape creation policies, including the automatic tape
    creation rules and the gateway that is using the policies."""


class ListAutomaticTapeCreationPoliciesOutputDict(TypedDict):
    automatic_tape_creation_policy_infos: NotRequired[list[AutomaticTapeCreationPolicyInfoDict]]
