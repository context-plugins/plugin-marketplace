from __future__ import annotations

from typing import TypeAlias

from ..group_signer import GroupSigner, GroupSignerDict
from ..user_signer import UserSigner, UserSignerDict

SignatureRecipientModel: TypeAlias = UserSigner | GroupSigner
"""Defines a signature recipient which can either be an individual signer or a group signer.

- For individual signers, account_email and/or signer_identity_data can optionally be provided.
- For group signers, signer_group_id must be provided and account_email/signer_identity_data must not be used."""

SignatureRecipientModelDict: TypeAlias = UserSignerDict | GroupSignerDict
