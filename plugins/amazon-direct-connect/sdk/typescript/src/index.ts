export { AwsDirectConnectClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { AwsDirectConnect } from "./resources/aws-direct-connect.js";
export { Operations } from "./resources/operations.js";
export { ResiliencyGroupApi } from "./resources/resiliency-group-api.js";

export {
  acceptDirectConnectGatewayAssociationProposalRequestSchema,
  type AcceptDirectConnectGatewayAssociationProposalRequest,
} from "./models/accept-direct-connect-gateway-association-proposal-request.js";
export {
  acceptDirectConnectGatewayAssociationProposalResultSchema,
  type AcceptDirectConnectGatewayAssociationProposalResult,
} from "./models/accept-direct-connect-gateway-association-proposal-result.js";
export { AddressFamily, addressFamilySchema } from "./models/address-family.js";
export { AddressFamily5, addressFamily5Schema } from "./models/address-family5.js";
export { AddressFamily6, addressFamily6Schema } from "./models/address-family6.js";
export {
  allocateConnectionOnInterconnectRequestSchema,
  type AllocateConnectionOnInterconnectRequest,
} from "./models/allocate-connection-on-interconnect-request.js";
export {
  allocateHostedConnectionRequestSchema,
  type AllocateHostedConnectionRequest,
} from "./models/allocate-hosted-connection-request.js";
export {
  allocatePrivateVirtualInterfaceRequestSchema,
  type AllocatePrivateVirtualInterfaceRequest,
} from "./models/allocate-private-virtual-interface-request.js";
export {
  allocatePublicVirtualInterfaceRequestSchema,
  type AllocatePublicVirtualInterfaceRequest,
} from "./models/allocate-public-virtual-interface-request.js";
export {
  allocateTransitVirtualInterfaceRequestSchema,
  type AllocateTransitVirtualInterfaceRequest,
} from "./models/allocate-transit-virtual-interface-request.js";
export {
  allocateTransitVirtualInterfaceResultSchema,
  type AllocateTransitVirtualInterfaceResult,
} from "./models/allocate-transit-virtual-interface-result.js";
export { asPathSegmentSchema, type AsPathSegment } from "./models/as-path-segment.js";
export {
  associateConnectionWithLagRequestSchema,
  type AssociateConnectionWithLagRequest,
} from "./models/associate-connection-with-lag-request.js";
export {
  associateConnectionsToResiliencyGroupRequestSchema,
  type AssociateConnectionsToResiliencyGroupRequest,
} from "./models/associate-connections-to-resiliency-group-request.js";
export {
  associateConnectionsToResiliencyGroupResultSchema,
  type AssociateConnectionsToResiliencyGroupResult,
} from "./models/associate-connections-to-resiliency-group-result.js";
export {
  associateHostedConnectionRequestSchema,
  type AssociateHostedConnectionRequest,
} from "./models/associate-hosted-connection-request.js";
export {
  associateMacSecKeyRequestSchema,
  type AssociateMacSecKeyRequest,
} from "./models/associate-mac-sec-key-request.js";
export {
  associateMacSecKeyResponseSchema,
  type AssociateMacSecKeyResponse,
} from "./models/associate-mac-sec-key-response.js";
export {
  associateVirtualInterfaceRequestSchema,
  type AssociateVirtualInterfaceRequest,
} from "./models/associate-virtual-interface-request.js";
export { associatedCoreNetworkSchema, type AssociatedCoreNetwork } from "./models/associated-core-network.js";
export { associatedGatewaySchema, type AssociatedGateway } from "./models/associated-gateway.js";
export { AssociationState, associationStateSchema } from "./models/association-state.js";
export { AttachmentState, attachmentStateSchema } from "./models/attachment-state.js";
export { AttachmentType, attachmentTypeSchema } from "./models/attachment-type.js";
export { availableBillingModeSchema, type AvailableBillingMode } from "./models/available-billing-mode.js";
export { bgpPeerSchema, type BgpPeer } from "./models/bgp-peer.js";
export { BgpPeerState, bgpPeerStateSchema } from "./models/bgp-peer-state.js";
export { BgpStatus, bgpStatusSchema } from "./models/bgp-status.js";
export { BillingMode, billingModeSchema } from "./models/billing-mode.js";
export { BillingMode1, billingMode1Schema } from "./models/billing-mode1.js";
export {
  BillingMode1AwsDirectConnectOperationsApi,
  billingMode1AwsDirectConnectOperationsApiSchema,
} from "./models/billing-mode1-aws-direct-connect-operations-api.js";
export { BillingMode2, billingMode2Schema } from "./models/billing-mode2.js";
export {
  BillingMode2AwsDirectConnectOperationsApi,
  billingMode2AwsDirectConnectOperationsApiSchema,
} from "./models/billing-mode2-aws-direct-connect-operations-api.js";
export { BillingMode3, billingMode3Schema } from "./models/billing-mode3.js";
export { BillingMode4, billingMode4Schema } from "./models/billing-mode4.js";
export {
  BillingModeAwsDirectConnectOperationsApi,
  billingModeAwsDirectConnectOperationsApiSchema,
} from "./models/billing-mode-aws-direct-connect-operations-api.js";
export {
  confirmConnectionRequestSchema,
  type ConfirmConnectionRequest,
} from "./models/confirm-connection-request.js";
export {
  confirmConnectionResponseSchema,
  type ConfirmConnectionResponse,
} from "./models/confirm-connection-response.js";
export {
  confirmCustomerAgreementRequestSchema,
  type ConfirmCustomerAgreementRequest,
} from "./models/confirm-customer-agreement-request.js";
export {
  confirmCustomerAgreementResponseSchema,
  type ConfirmCustomerAgreementResponse,
} from "./models/confirm-customer-agreement-response.js";
export {
  confirmPrivateVirtualInterfaceRequestSchema,
  type ConfirmPrivateVirtualInterfaceRequest,
} from "./models/confirm-private-virtual-interface-request.js";
export {
  confirmPrivateVirtualInterfaceResponseSchema,
  type ConfirmPrivateVirtualInterfaceResponse,
} from "./models/confirm-private-virtual-interface-response.js";
export {
  confirmPublicVirtualInterfaceRequestSchema,
  type ConfirmPublicVirtualInterfaceRequest,
} from "./models/confirm-public-virtual-interface-request.js";
export {
  confirmPublicVirtualInterfaceResponseSchema,
  type ConfirmPublicVirtualInterfaceResponse,
} from "./models/confirm-public-virtual-interface-response.js";
export {
  confirmTransitVirtualInterfaceRequestSchema,
  type ConfirmTransitVirtualInterfaceRequest,
} from "./models/confirm-transit-virtual-interface-request.js";
export {
  confirmTransitVirtualInterfaceResponseSchema,
  type ConfirmTransitVirtualInterfaceResponse,
} from "./models/confirm-transit-virtual-interface-response.js";
export { connectionSchema, type Connection } from "./models/connection.js";
export { ConnectionState, connectionStateSchema } from "./models/connection-state.js";
export {
  connectionAwsDirectConnectOperationsApiSchema,
  type ConnectionAwsDirectConnectOperationsApi,
} from "./models/connection-aws-direct-connect-operations-api.js";
export { connectionsSchema, type Connections } from "./models/connections.js";
export { createBgpPeerRequestSchema, type CreateBgpPeerRequest } from "./models/create-bgp-peer-request.js";
export {
  createBgpPeerResponseSchema,
  type CreateBgpPeerResponse,
} from "./models/create-bgp-peer-response.js";
export {
  createConnectionRequestSchema,
  type CreateConnectionRequest,
} from "./models/create-connection-request.js";
export {
  createDirectConnectGatewayAssociationProposalRequestSchema,
  type CreateDirectConnectGatewayAssociationProposalRequest,
} from "./models/create-direct-connect-gateway-association-proposal-request.js";
export {
  createDirectConnectGatewayAssociationProposalResultSchema,
  type CreateDirectConnectGatewayAssociationProposalResult,
} from "./models/create-direct-connect-gateway-association-proposal-result.js";
export {
  createDirectConnectGatewayAssociationRequestSchema,
  type CreateDirectConnectGatewayAssociationRequest,
} from "./models/create-direct-connect-gateway-association-request.js";
export {
  createDirectConnectGatewayAssociationResultSchema,
  type CreateDirectConnectGatewayAssociationResult,
} from "./models/create-direct-connect-gateway-association-result.js";
export {
  createDirectConnectGatewayRequestSchema,
  type CreateDirectConnectGatewayRequest,
} from "./models/create-direct-connect-gateway-request.js";
export {
  createDirectConnectGatewayResultSchema,
  type CreateDirectConnectGatewayResult,
} from "./models/create-direct-connect-gateway-result.js";
export {
  createInterconnectRequestSchema,
  type CreateInterconnectRequest,
} from "./models/create-interconnect-request.js";
export { createLagRequestSchema, type CreateLagRequest } from "./models/create-lag-request.js";
export {
  createPrivateVirtualInterfaceRequestSchema,
  type CreatePrivateVirtualInterfaceRequest,
} from "./models/create-private-virtual-interface-request.js";
export {
  createPublicVirtualInterfaceRequestSchema,
  type CreatePublicVirtualInterfaceRequest,
} from "./models/create-public-virtual-interface-request.js";
export {
  createResiliencyGroupRequestSchema,
  type CreateResiliencyGroupRequest,
} from "./models/create-resiliency-group-request.js";
export {
  createResiliencyGroupResultSchema,
  type CreateResiliencyGroupResult,
} from "./models/create-resiliency-group-result.js";
export {
  createTransitVirtualInterfaceRequestSchema,
  type CreateTransitVirtualInterfaceRequest,
} from "./models/create-transit-virtual-interface-request.js";
export {
  createTransitVirtualInterfaceResultSchema,
  type CreateTransitVirtualInterfaceResult,
} from "./models/create-transit-virtual-interface-result.js";
export { customerAgreementSchema, type CustomerAgreement } from "./models/customer-agreement.js";
export { deleteBgpPeerRequestSchema, type DeleteBgpPeerRequest } from "./models/delete-bgp-peer-request.js";
export {
  deleteBgpPeerResponseSchema,
  type DeleteBgpPeerResponse,
} from "./models/delete-bgp-peer-response.js";
export {
  deleteConnectionRequestSchema,
  type DeleteConnectionRequest,
} from "./models/delete-connection-request.js";
export {
  deleteDirectConnectGatewayAssociationProposalRequestSchema,
  type DeleteDirectConnectGatewayAssociationProposalRequest,
} from "./models/delete-direct-connect-gateway-association-proposal-request.js";
export {
  deleteDirectConnectGatewayAssociationProposalResultSchema,
  type DeleteDirectConnectGatewayAssociationProposalResult,
} from "./models/delete-direct-connect-gateway-association-proposal-result.js";
export {
  deleteDirectConnectGatewayAssociationRequestSchema,
  type DeleteDirectConnectGatewayAssociationRequest,
} from "./models/delete-direct-connect-gateway-association-request.js";
export {
  deleteDirectConnectGatewayAssociationResultSchema,
  type DeleteDirectConnectGatewayAssociationResult,
} from "./models/delete-direct-connect-gateway-association-result.js";
export {
  deleteDirectConnectGatewayRequestSchema,
  type DeleteDirectConnectGatewayRequest,
} from "./models/delete-direct-connect-gateway-request.js";
export {
  deleteDirectConnectGatewayResultSchema,
  type DeleteDirectConnectGatewayResult,
} from "./models/delete-direct-connect-gateway-result.js";
export {
  deleteInterconnectRequestSchema,
  type DeleteInterconnectRequest,
} from "./models/delete-interconnect-request.js";
export {
  deleteInterconnectResponseSchema,
  type DeleteInterconnectResponse,
} from "./models/delete-interconnect-response.js";
export { deleteLagRequestSchema, type DeleteLagRequest } from "./models/delete-lag-request.js";
export {
  deleteResiliencyGroupRequestSchema,
  type DeleteResiliencyGroupRequest,
} from "./models/delete-resiliency-group-request.js";
export {
  deleteResiliencyGroupResultSchema,
  type DeleteResiliencyGroupResult,
} from "./models/delete-resiliency-group-result.js";
export {
  deleteVirtualInterfaceRequestSchema,
  type DeleteVirtualInterfaceRequest,
} from "./models/delete-virtual-interface-request.js";
export {
  deleteVirtualInterfaceResponseSchema,
  type DeleteVirtualInterfaceResponse,
} from "./models/delete-virtual-interface-response.js";
export {
  describeConnectionLoaRequestSchema,
  type DescribeConnectionLoaRequest,
} from "./models/describe-connection-loa-request.js";
export {
  describeConnectionLoaResponseSchema,
  type DescribeConnectionLoaResponse,
} from "./models/describe-connection-loa-response.js";
export {
  describeConnectionsOnInterconnectRequestSchema,
  type DescribeConnectionsOnInterconnectRequest,
} from "./models/describe-connections-on-interconnect-request.js";
export {
  describeConnectionsRequestSchema,
  type DescribeConnectionsRequest,
} from "./models/describe-connections-request.js";
export {
  describeCustomerMetadataResponseSchema,
  type DescribeCustomerMetadataResponse,
} from "./models/describe-customer-metadata-response.js";
export {
  describeDirectConnectGatewayAssociationProposalsRequestSchema,
  type DescribeDirectConnectGatewayAssociationProposalsRequest,
} from "./models/describe-direct-connect-gateway-association-proposals-request.js";
export {
  describeDirectConnectGatewayAssociationProposalsResultSchema,
  type DescribeDirectConnectGatewayAssociationProposalsResult,
} from "./models/describe-direct-connect-gateway-association-proposals-result.js";
export {
  describeDirectConnectGatewayAssociationsRequestSchema,
  type DescribeDirectConnectGatewayAssociationsRequest,
} from "./models/describe-direct-connect-gateway-associations-request.js";
export {
  describeDirectConnectGatewayAssociationsResultSchema,
  type DescribeDirectConnectGatewayAssociationsResult,
} from "./models/describe-direct-connect-gateway-associations-result.js";
export {
  describeDirectConnectGatewayAttachmentsRequestSchema,
  type DescribeDirectConnectGatewayAttachmentsRequest,
} from "./models/describe-direct-connect-gateway-attachments-request.js";
export {
  describeDirectConnectGatewayAttachmentsResultSchema,
  type DescribeDirectConnectGatewayAttachmentsResult,
} from "./models/describe-direct-connect-gateway-attachments-result.js";
export {
  describeDirectConnectGatewaysRequestSchema,
  type DescribeDirectConnectGatewaysRequest,
} from "./models/describe-direct-connect-gateways-request.js";
export {
  describeDirectConnectGatewaysResultSchema,
  type DescribeDirectConnectGatewaysResult,
} from "./models/describe-direct-connect-gateways-result.js";
export {
  describeHostedConnectionsRequestSchema,
  type DescribeHostedConnectionsRequest,
} from "./models/describe-hosted-connections-request.js";
export {
  describeInterconnectLoaRequestSchema,
  type DescribeInterconnectLoaRequest,
} from "./models/describe-interconnect-loa-request.js";
export {
  describeInterconnectLoaResponseSchema,
  type DescribeInterconnectLoaResponse,
} from "./models/describe-interconnect-loa-response.js";
export {
  describeInterconnectsRequestSchema,
  type DescribeInterconnectsRequest,
} from "./models/describe-interconnects-request.js";
export { describeLagsRequestSchema, type DescribeLagsRequest } from "./models/describe-lags-request.js";
export { describeLoaRequestSchema, type DescribeLoaRequest } from "./models/describe-loa-request.js";
export {
  describeRouterConfigurationRequestSchema,
  type DescribeRouterConfigurationRequest,
} from "./models/describe-router-configuration-request.js";
export {
  describeRouterConfigurationResponseSchema,
  type DescribeRouterConfigurationResponse,
} from "./models/describe-router-configuration-response.js";
export { describeTagsRequestSchema, type DescribeTagsRequest } from "./models/describe-tags-request.js";
export { describeTagsResponseSchema, type DescribeTagsResponse } from "./models/describe-tags-response.js";
export {
  describeVirtualInterfacesRequestSchema,
  type DescribeVirtualInterfacesRequest,
} from "./models/describe-virtual-interfaces-request.js";
export {
  directConnectClientExceptionSchema,
  type DirectConnectClientException,
} from "./models/direct-connect-client-exception.js";
export {
  directConnectClientExceptionErrorSchema,
  type DirectConnectClientExceptionError,
} from "./models/direct-connect-client-exception-error.js";
export { directConnectGatewaySchema, type DirectConnectGateway } from "./models/direct-connect-gateway.js";
export {
  directConnectGatewayAssociationSchema,
  type DirectConnectGatewayAssociation,
} from "./models/direct-connect-gateway-association.js";
export {
  directConnectGatewayAssociationProposalSchema,
  type DirectConnectGatewayAssociationProposal,
} from "./models/direct-connect-gateway-association-proposal.js";
export {
  directConnectGatewayAttachmentSchema,
  type DirectConnectGatewayAttachment,
} from "./models/direct-connect-gateway-attachment.js";
export {
  DirectConnectGatewayState,
  directConnectGatewayStateSchema,
} from "./models/direct-connect-gateway-state.js";
export {
  directConnectServerExceptionSchema,
  type DirectConnectServerException,
} from "./models/direct-connect-server-exception.js";
export {
  directConnectServerExceptionErrorSchema,
  type DirectConnectServerExceptionError,
} from "./models/direct-connect-server-exception-error.js";
export {
  disassociateConnectionFromLagRequestSchema,
  type DisassociateConnectionFromLagRequest,
} from "./models/disassociate-connection-from-lag-request.js";
export {
  disassociateConnectionsFromResiliencyGroupRequestSchema,
  type DisassociateConnectionsFromResiliencyGroupRequest,
} from "./models/disassociate-connections-from-resiliency-group-request.js";
export {
  disassociateConnectionsFromResiliencyGroupResultSchema,
  type DisassociateConnectionsFromResiliencyGroupResult,
} from "./models/disassociate-connections-from-resiliency-group-result.js";
export {
  disassociateMacSecKeyRequestSchema,
  type DisassociateMacSecKeyRequest,
} from "./models/disassociate-mac-sec-key-request.js";
export {
  disassociateMacSecKeyResponseSchema,
  type DisassociateMacSecKeyResponse,
} from "./models/disassociate-mac-sec-key-response.js";
export {
  getResiliencyGroupRequestSchema,
  type GetResiliencyGroupRequest,
} from "./models/get-resiliency-group-request.js";
export {
  getResiliencyGroupResultSchema,
  type GetResiliencyGroupResult,
} from "./models/get-resiliency-group-result.js";
export { HasLogicalRedundancy, hasLogicalRedundancySchema } from "./models/has-logical-redundancy.js";
export { HasLogicalRedundancy1, hasLogicalRedundancy1Schema } from "./models/has-logical-redundancy1.js";
export { HasLogicalRedundancy2, hasLogicalRedundancy2Schema } from "./models/has-logical-redundancy2.js";
export {
  IntendedResiliencyModel,
  intendedResiliencyModelSchema,
} from "./models/intended-resiliency-model.js";
export { interconnectSchema, type Interconnect } from "./models/interconnect.js";
export { InterconnectState, interconnectStateSchema } from "./models/interconnect-state.js";
export { interconnectsSchema, type Interconnects } from "./models/interconnects.js";
export { lagSchema, type Lag } from "./models/lag.js";
export { LagState, lagStateSchema } from "./models/lag-state.js";
export { lagsSchema, type Lags } from "./models/lags.js";
export {
  listResiliencyGroupAssociationsRequestSchema,
  type ListResiliencyGroupAssociationsRequest,
} from "./models/list-resiliency-group-associations-request.js";
export {
  listResiliencyGroupAssociationsResultSchema,
  type ListResiliencyGroupAssociationsResult,
} from "./models/list-resiliency-group-associations-result.js";
export {
  listResiliencyGroupsRequestSchema,
  type ListResiliencyGroupsRequest,
} from "./models/list-resiliency-groups-request.js";
export {
  listResiliencyGroupsResultSchema,
  type ListResiliencyGroupsResult,
} from "./models/list-resiliency-groups-result.js";
export {
  listVirtualInterfaceRoutesRequestSchema,
  type ListVirtualInterfaceRoutesRequest,
} from "./models/list-virtual-interface-routes-request.js";
export {
  listVirtualInterfaceRoutesResponseSchema,
  type ListVirtualInterfaceRoutesResponse,
} from "./models/list-virtual-interface-routes-response.js";
export {
  listVirtualInterfaceTestHistoryRequestSchema,
  type ListVirtualInterfaceTestHistoryRequest,
} from "./models/list-virtual-interface-test-history-request.js";
export {
  listVirtualInterfaceTestHistoryResponseSchema,
  type ListVirtualInterfaceTestHistoryResponse,
} from "./models/list-virtual-interface-test-history-response.js";
export { loaSchema, type Loa } from "./models/loa.js";
export { LoaContentType, loaContentTypeSchema } from "./models/loa-content-type.js";
export { locationSchema, type Location } from "./models/location.js";
export { locationsSchema, type Locations } from "./models/locations.js";
export { macSecKeySchema, type MacSecKey } from "./models/mac-sec-key.js";
export { newBgpPeerSchema, type NewBgpPeer } from "./models/new-bgp-peer.js";
export {
  newPrivateVirtualInterfaceSchema,
  type NewPrivateVirtualInterface,
} from "./models/new-private-virtual-interface.js";
export {
  newPrivateVirtualInterfaceAllocationSchema,
  type NewPrivateVirtualInterfaceAllocation,
} from "./models/new-private-virtual-interface-allocation.js";
export {
  newPublicVirtualInterfaceSchema,
  type NewPublicVirtualInterface,
} from "./models/new-public-virtual-interface.js";
export {
  newPublicVirtualInterfaceAllocationSchema,
  type NewPublicVirtualInterfaceAllocation,
} from "./models/new-public-virtual-interface-allocation.js";
export {
  newTransitVirtualInterfaceSchema,
  type NewTransitVirtualInterface,
} from "./models/new-transit-virtual-interface.js";
export {
  newTransitVirtualInterfaceAllocationSchema,
  type NewTransitVirtualInterfaceAllocation,
} from "./models/new-transit-virtual-interface-allocation.js";
export { NniPartnerType, nniPartnerTypeSchema } from "./models/nni-partner-type.js";
export { PathType, pathTypeSchema } from "./models/path-type.js";
export { ProposalState, proposalStateSchema } from "./models/proposal-state.js";
export { rateLimiterStatusSchema, type RateLimiterStatus } from "./models/rate-limiter-status.js";
export { resiliencyGroupSchema, type ResiliencyGroup } from "./models/resiliency-group.js";
export {
  resiliencyGroupAssociationSchema,
  type ResiliencyGroupAssociation,
} from "./models/resiliency-group-association.js";
export {
  resiliencyGroupSummarySchema,
  type ResiliencyGroupSummary,
} from "./models/resiliency-group-summary.js";
export { ResiliencyGroupType, resiliencyGroupTypeSchema } from "./models/resiliency-group-type.js";
export { resourceTagSchema, type ResourceTag } from "./models/resource-tag.js";
export { routeSchema, type Route } from "./models/route.js";
export { RouteDirection, routeDirectionSchema } from "./models/route-direction.js";
export { RouteDirection1, routeDirection1Schema } from "./models/route-direction1.js";
export { routeFilterPrefixSchema, type RouteFilterPrefix } from "./models/route-filter-prefix.js";
export { routeFiltersSchema, type RouteFilters } from "./models/route-filters.js";
export { routerTypeSchema, type RouterType } from "./models/router-type.js";
export {
  startBgpFailoverTestRequestSchema,
  type StartBgpFailoverTestRequest,
} from "./models/start-bgp-failover-test-request.js";
export {
  startBgpFailoverTestResponseSchema,
  type StartBgpFailoverTestResponse,
} from "./models/start-bgp-failover-test-response.js";
export { State, stateSchema } from "./models/state.js";
export { State1, state1Schema } from "./models/state1.js";
export {
  StateAwsDirectConnectResiliencyGroupApi,
  stateAwsDirectConnectResiliencyGroupApiSchema,
} from "./models/state-aws-direct-connect-resiliency-group-api.js";
export {
  stopBgpFailoverTestRequestSchema,
  type StopBgpFailoverTestRequest,
} from "./models/stop-bgp-failover-test-request.js";
export {
  stopBgpFailoverTestResponseSchema,
  type StopBgpFailoverTestResponse,
} from "./models/stop-bgp-failover-test-response.js";
export { tagSchema, type Tag } from "./models/tag.js";
export { tagResourceRequestSchema, type TagResourceRequest } from "./models/tag-resource-request.js";
export { Type, typeSchema } from "./models/type.js";
export { untagResourceRequestSchema, type UntagResourceRequest } from "./models/untag-resource-request.js";
export {
  updateConnectionRequestSchema,
  type UpdateConnectionRequest,
} from "./models/update-connection-request.js";
export {
  updateConnectionsBillingModeRequestSchema,
  type UpdateConnectionsBillingModeRequest,
} from "./models/update-connections-billing-mode-request.js";
export {
  updateConnectionsBillingModeResponseSchema,
  type UpdateConnectionsBillingModeResponse,
} from "./models/update-connections-billing-mode-response.js";
export {
  updateDirectConnectGatewayAssociationRequestSchema,
  type UpdateDirectConnectGatewayAssociationRequest,
} from "./models/update-direct-connect-gateway-association-request.js";
export {
  updateDirectConnectGatewayAssociationResultSchema,
  type UpdateDirectConnectGatewayAssociationResult,
} from "./models/update-direct-connect-gateway-association-result.js";
export {
  updateDirectConnectGatewayRequestSchema,
  type UpdateDirectConnectGatewayRequest,
} from "./models/update-direct-connect-gateway-request.js";
export {
  updateDirectConnectGatewayResponseSchema,
  type UpdateDirectConnectGatewayResponse,
} from "./models/update-direct-connect-gateway-response.js";
export { updateLagRequestSchema, type UpdateLagRequest } from "./models/update-lag-request.js";
export {
  updateResiliencyGroupRequestSchema,
  type UpdateResiliencyGroupRequest,
} from "./models/update-resiliency-group-request.js";
export {
  updateResiliencyGroupResultSchema,
  type UpdateResiliencyGroupResult,
} from "./models/update-resiliency-group-result.js";
export {
  updateVirtualInterfaceAttributesRequestSchema,
  type UpdateVirtualInterfaceAttributesRequest,
} from "./models/update-virtual-interface-attributes-request.js";
export { virtualGatewaySchema, type VirtualGateway } from "./models/virtual-gateway.js";
export { virtualGatewaysSchema, type VirtualGateways } from "./models/virtual-gateways.js";
export { virtualInterfaceSchema, type VirtualInterface } from "./models/virtual-interface.js";
export { VirtualInterfaceState, virtualInterfaceStateSchema } from "./models/virtual-interface-state.js";
export {
  virtualInterfaceTestHistorySchema,
  type VirtualInterfaceTestHistory,
} from "./models/virtual-interface-test-history.js";
export { virtualInterfacesSchema, type VirtualInterfaces } from "./models/virtual-interfaces.js";
export { XAmzTarget, xAmzTargetSchema } from "./models/xamz-target.js";
export { XAmzTarget1, xAmzTarget1Schema } from "./models/xamz-target1.js";
export { XAmzTarget10, xAmzTarget10Schema } from "./models/xamz-target10.js";
export {
  XAmzTarget10AwsDirectConnectOperationsApi,
  xAmzTarget10AwsDirectConnectOperationsApiSchema,
} from "./models/xamz-target10-aws-direct-connect-operations-api.js";
export { XAmzTarget11, xAmzTarget11Schema } from "./models/xamz-target11.js";
export {
  XAmzTarget11AwsDirectConnectOperationsApi,
  xAmzTarget11AwsDirectConnectOperationsApiSchema,
} from "./models/xamz-target11-aws-direct-connect-operations-api.js";
export { XAmzTarget12, xAmzTarget12Schema } from "./models/xamz-target12.js";
export {
  XAmzTarget12AwsDirectConnectOperationsApi,
  xAmzTarget12AwsDirectConnectOperationsApiSchema,
} from "./models/xamz-target12-aws-direct-connect-operations-api.js";
export { XAmzTarget13, xAmzTarget13Schema } from "./models/xamz-target13.js";
export {
  XAmzTarget13AwsDirectConnectOperationsApi,
  xAmzTarget13AwsDirectConnectOperationsApiSchema,
} from "./models/xamz-target13-aws-direct-connect-operations-api.js";
export { XAmzTarget14, xAmzTarget14Schema } from "./models/xamz-target14.js";
export {
  XAmzTarget14AwsDirectConnectOperationsApi,
  xAmzTarget14AwsDirectConnectOperationsApiSchema,
} from "./models/xamz-target14-aws-direct-connect-operations-api.js";
export { XAmzTarget15, xAmzTarget15Schema } from "./models/xamz-target15.js";
export { XAmzTarget16, xAmzTarget16Schema } from "./models/xamz-target16.js";
export { XAmzTarget17, xAmzTarget17Schema } from "./models/xamz-target17.js";
export { XAmzTarget18, xAmzTarget18Schema } from "./models/xamz-target18.js";
export { XAmzTarget19, xAmzTarget19Schema } from "./models/xamz-target19.js";
export {
  XAmzTarget1AwsDirectConnectOperationsApi,
  xAmzTarget1AwsDirectConnectOperationsApiSchema,
} from "./models/xamz-target1-aws-direct-connect-operations-api.js";
export {
  XAmzTarget1AwsDirectConnectResiliencyGroupApi,
  xAmzTarget1AwsDirectConnectResiliencyGroupApiSchema,
} from "./models/xamz-target1-aws-direct-connect-resiliency-group-api.js";
export { XAmzTarget2, xAmzTarget2Schema } from "./models/xamz-target2.js";
export { XAmzTarget20, xAmzTarget20Schema } from "./models/xamz-target20.js";
export { XAmzTarget21, xAmzTarget21Schema } from "./models/xamz-target21.js";
export { XAmzTarget22, xAmzTarget22Schema } from "./models/xamz-target22.js";
export { XAmzTarget23, xAmzTarget23Schema } from "./models/xamz-target23.js";
export { XAmzTarget24, xAmzTarget24Schema } from "./models/xamz-target24.js";
export { XAmzTarget25, xAmzTarget25Schema } from "./models/xamz-target25.js";
export { XAmzTarget26, xAmzTarget26Schema } from "./models/xamz-target26.js";
export { XAmzTarget27, xAmzTarget27Schema } from "./models/xamz-target27.js";
export { XAmzTarget28, xAmzTarget28Schema } from "./models/xamz-target28.js";
export { XAmzTarget29, xAmzTarget29Schema } from "./models/xamz-target29.js";
export {
  XAmzTarget2AwsDirectConnectOperationsApi,
  xAmzTarget2AwsDirectConnectOperationsApiSchema,
} from "./models/xamz-target2-aws-direct-connect-operations-api.js";
export {
  XAmzTarget2AwsDirectConnectResiliencyGroupApi,
  xAmzTarget2AwsDirectConnectResiliencyGroupApiSchema,
} from "./models/xamz-target2-aws-direct-connect-resiliency-group-api.js";
export { XAmzTarget3, xAmzTarget3Schema } from "./models/xamz-target3.js";
export { XAmzTarget30, xAmzTarget30Schema } from "./models/xamz-target30.js";
export { XAmzTarget31, xAmzTarget31Schema } from "./models/xamz-target31.js";
export { XAmzTarget32, xAmzTarget32Schema } from "./models/xamz-target32.js";
export { XAmzTarget33, xAmzTarget33Schema } from "./models/xamz-target33.js";
export { XAmzTarget34, xAmzTarget34Schema } from "./models/xamz-target34.js";
export { XAmzTarget35, xAmzTarget35Schema } from "./models/xamz-target35.js";
export { XAmzTarget36, xAmzTarget36Schema } from "./models/xamz-target36.js";
export { XAmzTarget37, xAmzTarget37Schema } from "./models/xamz-target37.js";
export { XAmzTarget38, xAmzTarget38Schema } from "./models/xamz-target38.js";
export { XAmzTarget39, xAmzTarget39Schema } from "./models/xamz-target39.js";
export {
  XAmzTarget3AwsDirectConnectOperationsApi,
  xAmzTarget3AwsDirectConnectOperationsApiSchema,
} from "./models/xamz-target3-aws-direct-connect-operations-api.js";
export {
  XAmzTarget3AwsDirectConnectResiliencyGroupApi,
  xAmzTarget3AwsDirectConnectResiliencyGroupApiSchema,
} from "./models/xamz-target3-aws-direct-connect-resiliency-group-api.js";
export { XAmzTarget4, xAmzTarget4Schema } from "./models/xamz-target4.js";
export { XAmzTarget40, xAmzTarget40Schema } from "./models/xamz-target40.js";
export { XAmzTarget41, xAmzTarget41Schema } from "./models/xamz-target41.js";
export { XAmzTarget42, xAmzTarget42Schema } from "./models/xamz-target42.js";
export { XAmzTarget43, xAmzTarget43Schema } from "./models/xamz-target43.js";
export { XAmzTarget44, xAmzTarget44Schema } from "./models/xamz-target44.js";
export { XAmzTarget45, xAmzTarget45Schema } from "./models/xamz-target45.js";
export { XAmzTarget46, xAmzTarget46Schema } from "./models/xamz-target46.js";
export { XAmzTarget47, xAmzTarget47Schema } from "./models/xamz-target47.js";
export { XAmzTarget48, xAmzTarget48Schema } from "./models/xamz-target48.js";
export { XAmzTarget49, xAmzTarget49Schema } from "./models/xamz-target49.js";
export {
  XAmzTarget4AwsDirectConnectOperationsApi,
  xAmzTarget4AwsDirectConnectOperationsApiSchema,
} from "./models/xamz-target4-aws-direct-connect-operations-api.js";
export {
  XAmzTarget4AwsDirectConnectResiliencyGroupApi,
  xAmzTarget4AwsDirectConnectResiliencyGroupApiSchema,
} from "./models/xamz-target4-aws-direct-connect-resiliency-group-api.js";
export { XAmzTarget5, xAmzTarget5Schema } from "./models/xamz-target5.js";
export { XAmzTarget50, xAmzTarget50Schema } from "./models/xamz-target50.js";
export { XAmzTarget51, xAmzTarget51Schema } from "./models/xamz-target51.js";
export { XAmzTarget52, xAmzTarget52Schema } from "./models/xamz-target52.js";
export { XAmzTarget53, xAmzTarget53Schema } from "./models/xamz-target53.js";
export { XAmzTarget54, xAmzTarget54Schema } from "./models/xamz-target54.js";
export { XAmzTarget55, xAmzTarget55Schema } from "./models/xamz-target55.js";
export { XAmzTarget56, xAmzTarget56Schema } from "./models/xamz-target56.js";
export { XAmzTarget57, xAmzTarget57Schema } from "./models/xamz-target57.js";
export { XAmzTarget58, xAmzTarget58Schema } from "./models/xamz-target58.js";
export { XAmzTarget59, xAmzTarget59Schema } from "./models/xamz-target59.js";
export {
  XAmzTarget5AwsDirectConnectOperationsApi,
  xAmzTarget5AwsDirectConnectOperationsApiSchema,
} from "./models/xamz-target5-aws-direct-connect-operations-api.js";
export { XAmzTarget6, xAmzTarget6Schema } from "./models/xamz-target6.js";
export { XAmzTarget60, xAmzTarget60Schema } from "./models/xamz-target60.js";
export { XAmzTarget61, xAmzTarget61Schema } from "./models/xamz-target61.js";
export { XAmzTarget62, xAmzTarget62Schema } from "./models/xamz-target62.js";
export {
  XAmzTarget6AwsDirectConnectOperationsApi,
  xAmzTarget6AwsDirectConnectOperationsApiSchema,
} from "./models/xamz-target6-aws-direct-connect-operations-api.js";
export { XAmzTarget7, xAmzTarget7Schema } from "./models/xamz-target7.js";
export {
  XAmzTarget7AwsDirectConnectOperationsApi,
  xAmzTarget7AwsDirectConnectOperationsApiSchema,
} from "./models/xamz-target7-aws-direct-connect-operations-api.js";
export { XAmzTarget8, xAmzTarget8Schema } from "./models/xamz-target8.js";
export {
  XAmzTarget8AwsDirectConnectOperationsApi,
  xAmzTarget8AwsDirectConnectOperationsApiSchema,
} from "./models/xamz-target8-aws-direct-connect-operations-api.js";
export { XAmzTarget9, xAmzTarget9Schema } from "./models/xamz-target9.js";
export {
  XAmzTarget9AwsDirectConnectOperationsApi,
  xAmzTarget9AwsDirectConnectOperationsApiSchema,
} from "./models/xamz-target9-aws-direct-connect-operations-api.js";
export {
  XAmzTargetAwsDirectConnectOperationsApi,
  xAmzTargetAwsDirectConnectOperationsApiSchema,
} from "./models/xamz-target-aws-direct-connect-operations-api.js";
export {
  XAmzTargetAwsDirectConnectResiliencyGroupApi,
  xAmzTargetAwsDirectConnectResiliencyGroupApiSchema,
} from "./models/xamz-target-aws-direct-connect-resiliency-group-api.js";

export {
  CoreError as AwsDirectConnectError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  PaginationError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { Pageable, PageableApiResult } from "./core/pagination/pageable.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { HookOptions, BeforeRequestHook, AfterResponseHook, HookContext } from "./core/hooks.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded, ValidationResult, JsonValue } from "./core/validation/schema.js";
