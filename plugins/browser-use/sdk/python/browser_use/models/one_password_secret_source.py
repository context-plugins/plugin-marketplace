from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class OnePasswordSecretSource(SdkBaseModel):
    """One field of a 1Password item, resolved only when the agent asks for it.

    Nothing here is a secret: the quadruple NAMES a credential without carrying it. Creating the binding makes no call
    to 1Password — a provider outage must not stop a run from being dispatched, and no vault is ever enumerated.

    A one-time-password field resolves to its current code; its seed is never read, so there is no flag to ask for
    one."""

    type_: Literal["onepassword"] = Field(default="onepassword", alias="type")
    integration_id: UUID = Field(alias="integrationId")
    """1Password integration to resolve through. Must belong to this project."""

    vault_id: str = Field(alias="vaultId")
    item_id: str = Field(alias="itemId")
    field_id: str = Field(alias="fieldId")
    """Field id from the item-fields endpoint, e.g. "password"."""


class OnePasswordSecretSourceDict(TypedDict):
    type_: Literal["onepassword"]
    integration_id: UUID
    vault_id: str
    item_id: str
    field_id: str
